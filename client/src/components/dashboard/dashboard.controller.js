class DashboardController {

  constructor() {
    this.name = 'dashboard';
  }

  $onInit() {
    this.users = this.data.users.map(user => {
      return { name: user.name, data: [user.albumsCount, user.photosCount] }
    });

    this.chartConfig = {
      options: {
        chart: {
          type: 'column'
        },
        plotOptions: {
          series: {
            stacking: ''
          }
        },
      },
      series: this.users,
      title: {
        text: 'Albums And Photos Per User'
      },
      xAxis: {
        categories: ['Albums', 'Photos']
      },
      yAxis: {
        title: { text: 'Total Count' },
      },
      loading: false,
      size: {}
    };
  }

}

export default DashboardController;
