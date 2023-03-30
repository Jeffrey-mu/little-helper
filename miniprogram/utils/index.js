export const copy = (value) => {
    return new Promise((res, rej) => {
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
                res(value)
            },
            fail: (e) => {
                wx.showToast({
                    title: '复制失败！',
                    icon: 'none'
                })
                rej(e)
            }
        })
    })
}

export const request = ({
    url,
    method = 'GET',
    responseType = 'text',
    header = {},
    data = {},
    requestTask = null
}) => {
    return new Promise((Pres, Prej) => {
        requestTask = wx.request({
            url,
            method,
            responseType,
            header,
            data,
            success(res) {
                Pres(res)
            },
            fail: (err) => {

            }
        })
    })

}