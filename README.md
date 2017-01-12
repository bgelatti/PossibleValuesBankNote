#Possible Values BankNote

A package that given the existing banknotes and the amount to be paid, will return the possible values ​​that can be paid with the combination of banknotes.

##Installation

bower install possible-values-bank-note --save

##Add dependencies to the section of your main html:

```<script src="bower_components/possible-values-bank-note/dist/PossibleValuesBankNote.min.js"></script>```

##Example of Usage

PossibleValuesBankNote.possibleValues([2,10,20,50,100], 125.78);
So return the original value and possibles values considering the array of bank notes, like that - [125.78, 126, 130, 140, 150, 200]
