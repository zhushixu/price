function calculatePrice() {
    const baseDate = new Date('2024-09-27T00:00:00+08:00');  // 基准日期为中国时间
    const basePrice = 7.81;

    // 获取当前中国时间
    const today = new Date(new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }));

    // 获取基准日期的年月日
    const baseYear = baseDate.getFullYear();
    const baseMonth = baseDate.getMonth();
    const baseDay = baseDate.getDate();

    // 获取今天的年月日
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    // 计算日期差异（仅基于年月日，不考虑时间）
    const baseDateOnly = new Date(baseYear, baseMonth, baseDay);
    const todayDateOnly = new Date(todayYear, todayMonth, todayDay);

    // 计算天数差异
    const diffTime = todayDateOnly - baseDateOnly;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));  // 只计算整天

    // 计算当前价格
    const currentPrice = basePrice + (diffDays * 0.01);

    // 使用 toLocaleDateString 格式化日期为 YYYY-MM-DD
    const todayDateFormatted = today.toLocaleDateString("zh-CN", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/\//g, '-');  // 将日期中的斜杠替换为短横线

    // 输出到控制台
    console.log("日期: " + todayDateFormatted);
    console.log("价格: " + currentPrice.toFixed(2) + " 元");

    // 输出日期和价格到网页
    document.getElementById("date").textContent = "日期: " + todayDateFormatted;
    document.getElementById("price").textContent = "价格: " + currentPrice.toFixed(2) + " 元";
}

// 页面加载时调用函数
window.onload = calculatePrice;
