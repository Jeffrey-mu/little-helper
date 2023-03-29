// components/prompt/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        prompt: {
            type: Object,
        },
        active: ''
    },

    /**
     * 组件的初始数据
     */
    data: {
        active: ''
    },
    pageLifetimes: {
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onTap(e) {
            let {
                prompt
            } = e.currentTarget.dataset
            this.triggerEvent('change', {
				prompt
			}, {})
        },
    }
})