function a() {
    console.log(this);
    this.firstname = "Freshco";
}

a();
console.log(firstname);

var c = {
    name: 'The C object',
    log: function () {
        var self = this;

        console.log(self);

        var setname = function (newname) {
            self.name = newname;
        };
        setname("The Set Name Call");
        console.log(self);
    }
};

c.log();