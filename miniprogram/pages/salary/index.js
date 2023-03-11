// miniprogram/pages/salary/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        showSelect: false,
        selectList: [{
                name: '按工资缴纳',
                key: 0
            },
            {
                name: '自定义',
                key: 1
            },
        ],
        jnsb: 0,
        jngjj: 0,
        form: {
            salary: "",
            gongjijin: "",
            wuxian: "",
            ratio0: 12,
            ratio1: 8,
            ratio2: 2,
            ratio3: 0.5,

        },
        kouchu: {
            zinv: 0,
            jixu: 0,
            dabing: 0,
            daikuan: 0,
            zufang: 0,
            shanyang: 0,
        },
        result: {
            salary: 0,
            gongjijin: 0,
            wuxian: 0,
            tax: 0,
        },
        isPutsb: true,
        isPutgjj: true,
        activeKey: null,
    },
    onClose() {
        this.setData({
            showSelect: false
        });
    },
    onStepperChange(e) {
        let key = e.currentTarget.dataset.key
        this.setData({
            
        })
    },
    showSelect(e) {
        let key = e.currentTarget.dataset.key
        this.setData({
            showSelect: true,
            activeKey: key
        })
    },
    onSelect(event) {
        this.setData({
            [this.data.activeKey]: event.detail.key
        })
    },
    formChange(e) {
        const key = e.currentTarget.dataset.key;
        const value = e.detail;
        this.data.form[key] = value;
        this.setData({
            form: this.data.form
        });

    },
    kouchuChange(e) {
        const key = e.currentTarget.dataset.key;
        const value = e.detail;
        this.data.kouchu[key] = value;
        this.setData({
            kouchu: this.data.kouchu
        });
    },
    syncData(e) {
        let value = e.detail
        this.setData({
            form: {
                ...this.data.form,
                ...(!this.data.jnsb && {
                    wuxian: value
                }),
                ...(!this.data.jngjj && {
                    gongjijin: value,
                })
            }
        })
    },
    onSubmit() {
        // 免税基数
        let baseFreeTax = 5000 * 12;
        // 全年税前工资
        let totalSalary = this.data.form.salary * 12;
        // 全年公积金
        let totalGongjijin = ((this.data.form.gongjijin * this.data.form.ratio0) / 100) * 12;
        // 全年三险金额
        let totalWuxian = ((this.data.form.wuxian * (this.data.form.ratio1 + this.data.form.ratio2 + this.data.form.ratio3)) / 100 + 3) * 12;
        // 全年专项扣除
        let totalKouchu = this.genKouchu() * 12;
        // 全年应纳税所得额
        let beforeTax = totalSalary - totalGongjijin - totalWuxian - baseFreeTax - totalKouchu;
        // 全年应缴个税
        let totalTax = this.genTax(beforeTax);

        // 全年税后工资/12
        this.setData({
            result: {
                salary: parseInt((totalSalary - totalGongjijin - totalWuxian - totalTax) / 12),
                gongjijin: parseInt(totalGongjijin / 12) * 2,
                wuxian: parseInt(totalWuxian / 12),
                tax: parseInt(totalTax / 12),
            }
        })
    },
    // 计算全年所得税
    genTax(salaryBeforeTax) {
        // 全年应纳税所得额
        let b = salaryBeforeTax;
        if (b <= 0) return 0;
        // 全年应纳税所得额必须大于0，才走下面的逻辑
        let tax = 0;
        if (b <= 36000) {
            tax = b * 0.03;
        } else if (b > 36000 && b <= 144000) {
            tax = b * 0.1 - 2520;
        } else if (b > 144000 && b <= 300000) {
            tax = b * 0.2 - 16920;
        } else if (b > 300000 && b <= 420000) {
            tax = b * 0.25 - 31920;
        } else if (b > 420000 && b <= 660000) {
            tax = b * 0.3 - 52920;
        } else if (b > 660000 && b <= 960000) {
            tax = b * 0.35 - 85920;
        } else if (b > 960000) {
            tax = b * 0.45 - 181920;
        }
        return tax;
    },
    // 计算单月专项扣除
    genKouchu() {
        let kou = this.data.kouchu;
        let kouchu = 0;
        for (let k in kou) {
            if (kou[k] !== "") kouchu += parseInt(kou[k]);
        }
        return kouchu;
    },
    reset() {},
})