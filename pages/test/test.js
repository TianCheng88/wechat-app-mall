// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hello: "测试",
    loading: true,
    arr: [1, 2, 3, 4, 5],
    names: [{ firstName: "A", lastName: "AAAA" }, { firstName: "B", lastName: "BBBB" }],
    staffA: { firstName: "A", lastName: "AAAA" },
    staffB: { firstName: "B", lastName: "BBBB" },
    count: 1,
    isHidden: true,
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  navigateToTest2:function(event){
    console.log("*********navigateToTest2*********");
    console.log(event);
    wx.navigateTo({
      url: "/pages/test2/test2"
    });
  },
  redirectToTest2: function (event) {
    console.log("*********navigateToTest2*********");
    console.log(event);
    wx.redirectTo({
      url: "/pages/test2/test2"
    });
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("test>>>>onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        loading: false,
        isHidden: false,
      });
    }, 3000)
    this.setData({ arr: [1, 2, 3, 4, 5, 6] });
  },
  add: function () {
    this.setData({ count: this.data.count + 1 })

  },
  tapName: function (event) {
    console.log(event.currentTarget.dataset);
    console.log(event.currentTarget.dataset.hi);
    console.log(event);
  },
  handleTap1:function(event){
    console.log(">>>>>>>>>>>>>handleTap1111111");
  },
  handleTap2: function (event) {
    console.log(">>>>>>>>>>>>>handleTap2222222");
  },
  handleTap3: function (event) {
    console.log(">>>>>>>>>>>>>handleTap33333333");
  },
  onHide:function(){
    console.log("test>>>>onHide");
  },
  onShow: function () {
    console.log("test>>>>onShow");
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("test>>>>onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})