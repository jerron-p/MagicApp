import pandas as pd
import math
import string

df = pd.read_csv("codeBase.csv")
printTemplate = ""
#iterate through the dataframe
for row in df.itertuples():
    #change all values back to 0 or None
    cardNameVal = ""
    powerVal = None
    toughnessVal = None
    optionalVal = []
    imageUrlVal = "/assets/cardImg/"
    typeVal = []
    subtypeVal = []
    costVal = []
    colorVal = []
    backsideVal = None
    twoFaceVal = None
    convertedManaCostVal = 0
    purposeVal = []
    #1:Deck,2:cardName,3:Power,4:Toughness,5:Optional,6:ImageUrl,
    #7:Type,8:Subtype,9:Blue,10:Grey,11:X,12:Converted,13:Function,
    #14:Quantity
    #Assign values
    #cardName
    cardNameVal = row[2]
    #power
    if(type(row[3]) == str):
        powerVal = int(row[3])
    elif(type(row[3]) == float):
        if(not(math.isnan(row[3]))):
            powerVal = int(row[3])
    #toughness
    if(type(row[4]) == str):
        toughnessVal = int(row[4])
    elif(type(row[4]) == float):
        if(not(math.isnan(row[4]))):
            toughnessVal = int(row[4])
    #optional
    if(type(row[5]) == str):
        changeToArray = row[5].split(";")
        for optionalCost in changeToArray:
            optionalVal.append(optionalCost)
    optionalVal = str(optionalVal).replace("'","")
    #Create the image url by changing the cardName to camel case
    addCaps = string.capwords(row[2])
    lowerFirstWord = addCaps[0].lower() + addCaps[1:]
    removeSpaces = lowerFirstWord.replace(" ","")
    imageUrlVal = imageUrlVal + removeSpaces + ".jpg"
    imageUrlVal = imageUrlVal.replace("'", "\'")
    #type
    changeToArray = row[7].replace(" ","").split(",")
    for creatureType in changeToArray:
        typeVal.append(creatureType)
    #subtype
    if (type(row[8]) == str):
        changeToArray = row[8].replace(" ","").split(",")
        for creatureType in changeToArray:
            subtypeVal.append(creatureType)
    elif (not(math.isnan(row[8]))):
        changeToArray = row[8].replace(" ","").split(",")
        for creatureType in changeToArray:
            subtypeVal.append(creatureType)
    #create the costVal tuples
    #Check if there is x mana
    if(not(math.isnan(row[11]))):
        costVal.append(["X",1])
    #check if there is colorless mana
    if(not(math.isnan(row[10]))):
        costVal.append(["Grey",row[10]])
    #check if there is blue mana and assign color
    if(not(math.isnan(row[9]))):
        costVal.append(["Blue",row[9]])
        colorVal.append("['Blue']")
    else:
        colorVal.append("['Colorless']")
    #Converted mana
    convertedManaCostVal = row[12]
    #purpose
    purposeVal = row[13]

    #########################Print the template for data.ts######################################
    #Add cardName
    printTemplate = printTemplate + '{\n\tcardName:"' + cardNameVal +'"'
    #Check if there is power & toughness
    if(not(math.isnan(row[4]))): 
        #Add power and toughness
        printTemplate = printTemplate + ",\n\tpower:" + str(powerVal) + ",\n\ttoughness:" +str(toughnessVal)
    #Add imageUrl
    printTemplate = printTemplate + ',\n\timageUrl:"' + imageUrlVal +'"'
    #Add convertedMana
    printTemplate = printTemplate + ",\n\tconvertedManaCost:" + str(convertedManaCostVal)
    #Add type
    printTemplate = printTemplate + ",\n\ttype:" + str(typeVal)
    #Add subtype
    printTemplate = printTemplate + ",\n\tsubtype:" + str(subtypeVal)
    #Add cost
    printTemplate = printTemplate + ",\n\tcost:" + str(costVal)
    #Add optional
    printTemplate = printTemplate + ",\n\toptional:" + str(optionalVal)
    #Add color
    printTemplate = printTemplate + ",\n\tcolor:" + str(colorVal)
    #Add purpose
    printTemplate = printTemplate + ",\n\tpurpose:['" + purposeVal + "']"
    #Add the end
    printTemplate = printTemplate + "\n},\n"
    ##########################End of createing print template###############################################
with open('datats.txt', 'w') as f:
    f.write(printTemplate)