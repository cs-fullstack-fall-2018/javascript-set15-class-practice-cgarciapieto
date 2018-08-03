
// this a class code for cell phones. It contains name, storage, model, screen size, has head phone jack

class Phone {
    constructor(name, storageLimit, isAndroid, screenSize, hasHeadPhoneJack) {
        this.name = name;
        this.storageLimit = storageLimit;
        this.isAndroid = isAndroid;
        this.screenSize = screenSize;
        this.hasHeadPhoneJack = hasHeadPhoneJack;
    }

    printAllAttributes() {
        alert(this.name + ": " + "Storage; " + " "  + this.storageLimit + ": " + this.isAndroid + ": " + "Screen size: " + ": " + this.screenSize + ": " + "Headphone Jack? " + this.hasHeadPhoneJack);
    }


}
    function main() {


        var phone1 = new Phone("Apple", 50, "no", 5, "yes");
        var phone2 = new Phone("Android", 60, "yes", 13, "no");

        phone1.printAllAttributes();
        phone2.printAllAttributes();





}
main();


/*
    KEY: Good Job! You did more than any of the other guys so props for that!
*/