


// add-task

$('.add-task').click(function(){
    $(this).fadeOut(500);
    $(this).siblings('.add-con').slideDown(600);
});

$('.add-con-btn button.cancel').click(function(){
    $(this).parents('.add-con').slideUp(600);
    $(this).parents('.add-con').siblings('.add-task').fadeIn(500);
});

jqFunc();


var addTask = document.getElementById('add-task');
var content = document.querySelector('.task-list ul');

var data = [];

// 新增 list
var str = '';
function addTaskFunc(){

    var ymdValue = document.querySelector('.ymd').value;
    var messageValue = document.querySelector('.message').value;
    var taskTitleValue = document.getElementById('task-title').value;
    var dataTotal = document.querySelector('.data-total');
    
        str = str + `<li>
        <div class="list">
            <div class="list-check">
                <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div class="list-content">
                <h1 class="title"> ${taskTitleValue} </h1>
                <div class="lc-status">
                    <span class="remark">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <span class="date">${ymdValue}</span>
                    </span>
                    <span class="remark">
                        <i class="fa fa-file-o" aria-hidden="true"></i>
                    </span>
                    <span class="remark">
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="list-edit">
                <span class="star">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="edit">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
            </div>
        </div>
        <div class="add-con">
            <div class="add-con-title">
                <div class="list-check">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div class="list-content">
                    <h1 class="title">Type Something Here.</h1>
                </div>
                <div class="list-edit">
                    <span class="star">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            <div class="add-con-edit">
                <form action="">
                    <div class="ace-list">
                        <h2>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            Deadline
                        </h2>
                        <div class="deadline">
                            <input type="text" class="ymd" id="ymd" name="ymd" placeholder="yyyy/mm/dd">
                            <input type="text" class="hm" id="hm" name="hm" placeholder="hh:mm">
                        </div>
                    </div>
                    <div class="ace-list">
                        <h2>
                            <i class="fa fa-file-o" aria-hidden="true"></i>
                            File
                        </h2>
                        <div class="file">
                            <label class="btn btn-info">
                                <input id="upload_img" style="" type="file">
                            </label>
                        </div>
                    </div>
                    <div class="ace-list">
                        <h2>
                            <i class="fa fa-commenting-o" aria-hidden="true"></i>
                            Comment
                        </h2>
                        <div class="comments">
                            <textarea class="message" id="message" name="message" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="add-con-btn">
                <button class="cancel">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    Cancel
                </button>
                <button class="save">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Save
                </button>
            </div>
        </div>
    </li>
        `

    content.innerHTML = str;
    data.push(str);
    dataTotal.textContent = data.length;
    // localStorage.setItem('dataSave', JSON.stringify(data));
    jqFunc();
}


function jqFunc(){
    // list-check 勾選
    $('.list-check').click(function(){
        $(this).toggleClass("active");
        $(this).siblings('.list-content').children('.lc-status').toggleClass("active");
        $(this).siblings('.list-content').children('.title').toggleClass("active");
    });

    // list-edit
    $('.list-edit .star').click(function(){
        $(this).toggleClass("active");
        $(this).parents('.list').toggleClass("active");
    });
    // pencil edit-task
    $('.edit .fa-pencil').click(function(){
        $(this).parents('.list').siblings('.add-con').slideToggle(600);
    });
}


addTask.addEventListener('click',addTaskFunc,false);














// --------------wow
var wow = new WOW(
{
    boxClass:     'wow', 
    animateClass: 'animated',
    offset:       0,  
    mobile:       true, 
    live:         true, 
    callback:     function(box) {

    },
    scrollContainer: null 
}
);
wow.init();
// --------------wow END






// 漢堡選單
// $('.open_button').each(function(){
//     $(this).click(function(){
//         if($(this).hasClass('active')){
//         $(this).siblings('nav').slideUp(500);
//         $(this).children().children('.menu-top').removeClass('menu-top-click');
//         $(this).children().children('.menu-middle').removeClass('menu-middle-click');
//         $(this).children().children('.menu-bottom').removeClass('menu-bottom-click');
//         $(this).removeClass('active');
//         } else{
//         $(this).siblings('nav').slideDown(500);
//         $(this).children().children('.menu-top').addClass('menu-top-click');
//         $(this).children().children('.menu-middle').addClass('menu-middle-click');
//         $(this).children().children('.menu-bottom').addClass('menu-bottom-click');
//         $(this).addClass('active');
//         }
//     });
// });

// 漢堡選單 END


// 點擊後滑到此區塊
// $('.detail_menu li').click(function(){
//     var $this_el = $(this).parents('a').attr('href');
//     $('html,body').animate({scrollTop:$($this_el).offset().top - 86},800);
// });


























