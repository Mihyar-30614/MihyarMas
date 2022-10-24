(() => {
    'use strict'

    $('#navbarSideCollapse').on('click', () => {
        $('.offcanvas-collapse').toggleClass('open');
    });

    $('#home').on('click', () => {
        $("#single-page-container").load("../pages/home.html", () => {
            $("#yearsOfExp").text(new Date().getFullYear() - 2017);
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #home").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('#about').on('click', () => {
        $("#single-page-container").load("../pages/about.html", () => {
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #about").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('#resume').on('click', () => {
        $("#single-page-container").load("../pages/resume.html", () => {
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #resume").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('#signup').on('click', () => {
        $("#single-page-container").load("../pages/signup.html", () => {
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #resume").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('.theme-switch').on('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
        }
    });

    // Run once website load
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') toggleSwitch.checked = true;
    };
    $("#home").trigger("click");

    console.info(`
    👍Welcome! you have made it to the secret terminal shhh!!🤐. \n
    Here are some of your options📃:%c
    1) Mihyar.github() :---------- will take you to my github profile.
    2) Mihyar.linkedin() :-------- will take you to my linkedin profile.
    3) Mihyar.twitter() :--------- will take you to my twitter profile.
    4) Mihyar.facebook() :-------- will take you to my facebook profile.
    5) Mihyar.email() :----------- will give you my email address.
    `, 'background: #222; color: #bada55');

})()

const Mihyar = {
    email: email = () => "eng.mihyear@gmail.com",
    github: github = () => {
        let url = 'https://github.com/Mihyar-30614';
        window.open(url, '_blank').focus();
    },
    linkedin: linkedin = () => {
        let url = 'https://www.linkedin.com/in/mihyar/';
        window.open(url, '_blank').focus();
    },
    twitter: twitter = () => {
        let url = 'https://twitter.com/MihyarMas';
        window.open(url, '_blank').focus();
    },
    facebook: facebook = () => {
        let url = 'https://www.facebook.com/Mihyar';
        window.open(url, '_blank').focus();
    }
}

function getInTouch() {
    $("#mailto")[0].click();
}