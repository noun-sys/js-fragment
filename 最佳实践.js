// 判断工作日的写法
let day = 2;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('work');
        break; // 在这里放一个 break
    case 6:
    case 7:
        console.log('relax');
        break; // 在这里放一个 break
    default:
        break;
}

// 判断月份的天数
let month = 2;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('这个月31天');
        break; // 在这里放一个 break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('这个月有30天');
        break; // 在这里放一个 break
    case 2:
        console.log('这个月可能27/28天');
        break; // 在这里放一个 break
    default:
        break;
}
