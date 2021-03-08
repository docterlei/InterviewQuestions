function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b; 
    thie.time = 0;
    this.timer = -1;
    this.start = function() {
        this.timer = setTimeout(() => {
            fn();
            this.time++;
            this.start()
        }, this.a, this.time * this.b);
    }
    
    this.stop = function() {
        this.time = 0;
        clearTimeout(this.timer)
    }
}

var a = new mySetInterVal(() => {console.log('123')}, 1000, 2000);
a.start();
a.stop();