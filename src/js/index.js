window.onload = function () {
    const lectureList = [
        {
            name: '第一节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['html'],
            class: ['tag-html'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        },
        {
            name: '第2节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['js'],
            class: ['tag-js'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        },
        {
            name: '第3节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['css'],
            class: ['tag-css'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        },
        {
            name: '第4节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['html', 'js'],
            class: ['tag-js', 'tag-html'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        },
        {
            name: '第5节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['css', 'js'],
            class: ['tag-js', 'tag-css'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        },
        {
            name: '第6节课 xxx',
            description: '小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落小一些长一些的文字段落',
            tag: ['html', 'js', 'css'],
            class: ['tag-js', 'tag-html', 'tag-css'],
            imgSrc: 'src/img/IMG_schedule.jpg'
        }
    ]

    function renderLecture(lectureList) {
        let str = ''
        for (i = 0; i < lectureList.length; i++) {
            str = str + '<div class="schedule-class class-html">' + '<img ' + 'src="' + lectureList[i].imgSrc + '" alt="图裂了呢"></img>'
            str = str + '<div><p class="schedule-class-name">' + lectureList[i].name + '</p>'
            str = str + '<p class="class-description">' + lectureList[i].description + '</p>'
            lectureList[i].tag.map((item) => {
                str = str + '<div class="tag ' + 'tag-' + item + ' ">' + item + '</div>'
            })
            str = str + '</div></div>'
        }
        return str
    }



    function addClickFunction(eventElement, rootElement, tagName, lectureList) {
        eventElement.onclick = () => {
            let newList = []
            if (tagName == 'all') {
                newList = lectureList
            } else lectureList.map((lecture) => {
                if (lecture.tag.indexOf(tagName) != -1) {
                    newList.push(lecture)
                }
            })

            rootElement.innerHTML = renderLecture(newList)

        }
    }

    let rootElement = document.getElementById('class-root')
    let tabs = document.getElementById('ul-tab');
    let li = tabs.getElementsByTagName('li')

    for (i = 0; i < Object.keys(li).length; i++) {
        addClickFunction(li[i], rootElement, li[i].getAttribute('value'), lectureList)
    }

    rootElement.innerHTML = renderLecture(lectureList)
}