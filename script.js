isPersian = true;
function translateToPersian() {
    var a = document.getElementById('per')
    a.classList.add('persian')
    a.innerHTML = 'فارسی'
    a.style.fontFamily = 'IranYekan'
    var a = document.getElementById('en')
    a.classList.add('persian')
    a.style.fontFamily = 'IranYekan'
    a.innerHTML = 'انگلیسی'

    //header
    var a = document.getElementById('1')
    a.classList.add('persian')
    a.innerHTML = `برنامه سازی پیشرفته 1400-1401
                <br>
                <div class="credits">
                <h4 class="persian" style="font-size: calc(3px + 0.5vw + 0.5vh);font-family: 'IranYekan';">دانشگاه گیلان - دانشکده علوم ریاضی</h4>
                </div>
            </h2>`

    //instructor
    var a = document.getElementById('2')
    a.classList.add('persian')
    a.innerHTML = `مدرس: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">دکتر اسکندری</a>`

    //
    var a = document.getElementById('3')
    a.classList.add('persian')
    a.style.direction = "rtl"
    a.innerHTML = `
        امروزه، برنامه نویسی کامپیوتری به یکی از مهارتهای مورد نیاز در بسیاری از علوم تبدیل شده است. در این درس، با مفاهیم پیشرفته برنامه نویسی آشنا خواهیم شد. برنامه نویسی شیء گرا، ساختمان داده ها و طراحی و تحلیل الگوریتمهای کاربردی، از جمله مهمترین این مفاهیم هستند. اگرچه، تمامی این مفاهیم مستقل از یک زبان برنامه نویسی خاص قابل طرح می باشند، در این درس از زبان محبوب <a class="link" href="https://www.python.org/" target="_blank">پایتون</a> به عنوان ابزاری جهت پیاده سازی مفاهیم مورد نظر استفاده خواهیم کرد. دلیل این انتخاب، سادگی، محبوبیت و متن باز بودن این زبان برنامه نویسی است. در این درس، تمرکز ویژه ای بر فعالیت های عملی و گروهی خواهد بود. در طول یک ترم، دانشجویان با نحوه کدنویسی شیء گرا آشنا شده و این مفهوم را در قالب یک پروژه گروهی پایانی پیاده سازی خواهند کرد. در پایان این واحد درسی از دانشجویان محترم انتظار می رود تا بتوانند برای پروژه های بزرگ کلاس های مختلف را طراحی کرده، از ساختمان داده های مناسب برای آنها بهره برده و واسط های گرافیکی کارآمد طراحی کنند. جهت دریافت اطلاعات تکمیلی، به صفحه <a class="link"
        href="https://mehrshaad.github.io/testsite/syllabus.html">رئوس مطالب</a> مراجعه نمائید
        `
    var a = document.getElementById('4')
    a.classList.add('persian')
    a.innerHTML = `رئوس مطالب`

    var a = document.getElementById('5')
    a.classList.add('persian')
    a.innerHTML = `فایل های درسی بارگذاری شده به همراه اطلاعاتی درباره منابع و جزئیات ریز نمرات`

    var a = document.getElementById('6')
    a.classList.add('persian')
    a.innerHTML = `تیم حل تمرین`

    var a = document.getElementById('7')
    a.classList.add('persian')
    a.innerHTML = `لیست اعضای حل تمرین این ترم`

    var a = document.getElementById('8')
    a.classList.add('persian')
    a.innerHTML = `پروژه های پایانی`

    var a = document.getElementById('9')
    a.classList.add('persian')
    a.innerHTML = `اطلاعات کامل در مورد پروژه های پایانی`
    var a = document.getElementById('10')
    a.classList.add('persian')
    a.innerHTML = `تکلیف`
    var a = document.getElementById('11')
    a.classList.add('persian')
    a.innerHTML = `اطلاعاتی در مورد تمرین های ارسالی در طول ترم`
}


function translateToEnglish() {
    isPersian = false;
    var a = document.getElementById('per')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'Persian'
    var a = document.getElementById('en')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'English'

    var a = document.getElementById('1')
    a.classList.remove('persian')
    a.innerHTML = `Advanced Programming 1400-1401
                <br>
                <div class="credits">
                <h4 style="font-size: calc(3px + 0.5vw + 0.5vh);">© 2021 Copyright Guilan University</h4>
                </div>
            </h2>`
    var a = document.getElementById('2')
    a.classList.remove('persian')
    a.innerHTML = `Instructor: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">Dr. Sadegh Eskandari</a>`
    var a = document.getElementById('3')
    a.classList.remove('persian')
    a.style.direction = "ltr"
    a.innerHTML = `Nowadays, programming is one of the most needed skills. In this lesson we'll learn some topics of
      advanced programming. Object oriented programming, data structure and algorithm analyzing are the most important
      ones.
      Although, all of these topics are independent from a special programming language, but we use one of the most
      liked
      programming
      languages, which is <a class="link" href="https://www.python.org/" target="_blank">Python!</a> We chose python
      because it's simple, likeable and open source. In this
      lesson,
      most of our focus
      is on your teamworks and scientific activities. You'll learn object oriented programming, and you'll have to
      implement a project as a final teamwork result. At the end you'll be expected to write classes, use data
      structures and
      design a graphical user
      interface for your project.
      For more information visit the <a class="link"
        href="https://mehrshaad.github.io/testsite/syllabus.html">Syllabus</a> page.`

    var a = document.getElementById('4')
    a.classList.remove('persian')
    a.innerHTML = `Syllabus`
    var a = document.getElementById('5')
    a.classList.remove('persian')
    a.innerHTML = `Uploaded files and more information about resources of this lesson and scoring details`
    var a = document.getElementById('6')
    a.classList.remove('persian')
    a.innerHTML = `Teaching Assistant Team`
    var a = document.getElementById('7')
    a.classList.remove('persian')
    a.innerHTML = `A list of this semester teaching assistants and contacting information`
    var a = document.getElementById('8')
    a.classList.remove('persian')
    a.innerHTML = `Final Projects`
    var a = document.getElementById('9')
    a.classList.remove('persian')
    a.innerHTML = `Your final projects which you have to implement one of them for the end`
    var a = document.getElementById('10')
    a.classList.remove('persian')
    a.innerHTML = `Homework`
    var a = document.getElementById('11')
    a.classList.remove('persian')
    a.innerHTML = `More information about problem sets and their deadlines`

}
window.addEventListener('load', function () {
    document.getElementById('per').addEventListener('click', function () {
        translateToPersian()
    })

    document.getElementById('en').addEventListener('click', function () {
        translateToEnglish()
    })
})
window.onload = function () {
    if (isPersian) {
        translateToPersian()
    }
    else {
        translateToEnglish()
    }
}