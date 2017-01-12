var PossibleValuesBankNote = {
    possibleValues: possibleValues
};

window.PossibleValuesBankNote = PossibleValuesBankNote;

function possibleValues (bankNote, val) {
    var index = bankNote.length - 1;
    while ((val/bankNote[index]) < 1) {
        index = index - 1;
    }

    var rest = val%bankNote[index];
    var valueWithoutRest = val - rest;
    var valuesList = [];
    valuesList.push(val);
    var value = 0;
    var multplier = 1;

    for (i = 0; i <= bankNote.length - 1; i++) {
        if (bankNote[i] < rest) {
            value = bankNote[i];
            multplier = 1;
            while (value < rest) {
                value = bankNote[i] * multplier;
                multplier = multplier + 1;
            }
        } else if (rest == 0) {
            value = bankNote[i];
            multplier = 1;
            while (value < val) {
                value = bankNote[i] * multplier;
                multplier = multplier + 1;
            }
        } else if (bankNote[i] >= rest) {
            value = bankNote[i];
        }

        var includeValue = 0;
        if (value >= val) {
            includeValue = value;
        } else {
            includeValue = valueWithoutRest + value;
        }

        if (!valuesList.includes(includeValue)) {
            valuesList.push(includeValue);
        }
    }
    valuesList.sort(sortNumber);
    return valuesList;
}

function sortNumber(a,b) {
    return a - b;
}
