export const copyEvent = (value) => {
    if (!value) {
        wx.showToast({
            title: '复制内容为空！',
            icon: 'none'
        })
        return
    }
    wx.setClipboardData({
        data: value,
        success: () => {
            wx.showToast({
                title: '复制成功！',
                icon: 'none'
            })
        },
        fail: () => {
            wx.showToast({
                title: '复制失败！',
                icon: 'none'
            })
        }
    })
}

