        let minus = document.getElementById('minus');
        let plus = document.getElementById('plus');
        let total = document.getElementById('total');
        let data = 0;

        plus.onclick = function () {
            if (data >= 0) {
                minus.getAttribute("disabled");
                minus.style.color = 'white';
                minus.style.border = '2px solid white';

            }
            total.innerHTML = ++data;

        }
        minus.onclick = function () {
            if (data <= 0) {
                minus.getAttribute("disabled");
                minus.style.color = 'transparent';
                minus.style.border = 'transparent';

            }
            else {
                total.innerHTML = --data;
            }

        }

        reset.onclick = function () {
            data = 0;
            total.innerHTML = 0;
        }