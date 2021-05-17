var arr = [
    [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

<script>
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            } else{
                change.target.classList.remove('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }
    ;(function() {
        var throttle = function(type, name, obj) {
            var obj = obj || window;
            var running = false;
            var func = function() {
                if (running) { return; }
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };
        throttle ("scroll", "optimizedScroll");
    })();
    var star = document.getElementById('logo');

    window.addEventListener("optimizedScroll", function(){
        star.style.transform = "rotate("+window.pageYOffset/10 + "10deg)"

    });
    let menuBtn = document.querySelector('.yaro_menu_btn');
    let menu =  document.querySelector('.menu')
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })

</script>