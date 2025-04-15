// 动态的大括号svg
const generatePathData = (x, y, width, height, keyPoints) => {
    const leftPoint = keyPoints.find(p => p.type === 'xx');
    const curvePoint = keyPoints.find(p => p.type === 'yy');
  
    if (!leftPoint || !curvePoint) {
      console.error("关键点数据不完整");
      return "";
    }

    // M 40 0 Q 20 0 20 21 v 8 Q 20 50 0 50 Q 20 50 20 71 v 8 Q 20 100 40 100
  // TODO: 根据leftY计算出上下两部分的分界点
  // 分别获取上下两个区域的高度
  // 上面区域画一个大括号的上半部分
      // 上半部分是参考上面的path值， 上半部分应该是M 40 0 Q 20 0 20 21 v 8 Q 20 50 0 50，需要结合宽高等信息
  // 下面区域画一个大括号的下半部分
  // 下半部分是参考上面的path值， 下半部分应该是Q 20 50 20 71 v 8 Q 20 100 40 100 需要结合宽高等信息

  // 计算左侧交汇点
  const leftX = leftPoint.position.x || x; // 水平位置为0
  const leftY = y + (leftPoint.position.yPercent / 100) * height; // 垂直位置为百分比

  // 计算拐点
  const curveX = x + 0.5 * width; // 宽度的一半
  const curveY = Math.max(0, curvePoint.position.y || y + height * 0.5); // 这个计算规则可能不是这么简单

  // M 40 0 Q 20 0 20 21 v 8 Q 20 50 0 50 Q 20 50 20 71 v 8 Q 20 100 40 100

  const upperLen = leftY - curveY * 2;
  
  const a = '';
  'M 40 0', // 开始位置，是width的距离和顶部为0
  'Q 20 0 20 21', // 然后产生弧线，这个弧线宽度是width的一半，高度是算出来的,是根据传入的点的位置计算
  'v 0', // 竖线的高度，是计算出来的 计算规则是 上半区域高度 - 2 * 弧度高度
  'Q 20 50 0 50', // 上半区下弧线 宽度还是width一半，高度是交汇点的位置
  'Q 20 50 20 71', // 然后是下半弧度的第一个弧度 宽度都是width的一半，第一个点和上半区下弧度一样，第二个点是一半宽度，高度为弧度 + 第一个点的高度
  'v 8', // 这是下半部分线的高度，就是下半部分的高度 - 弧线高度 * 2
  'Q 20 100 40 100', // 这是最后一个弧度的位置，是居中最靠下下的点，最右下角的那个点