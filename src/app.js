import Amplify, * as AmplifyModules from 'aws-amplify'
import Analytics from '@aws-amplify/analytics';
import Vue from 'vue'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import awsconfig from './aws-exports'
import App from './App.vue'

// vueの設定。
Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);

// It's important that you instantiate the Vue instance after calling Vue.use!
new Vue({
  render: h => h(App)
}).$mount('#vueSample')


// analyticsの設定
Analytics.configure(awsconfig);
const AnalyticsResult = document.getElementById('AnalyticsResult');
const AnalyticsEventButton = document.getElementById('AnalyticsEventButton');
let EventsSent = 0;
AnalyticsEventButton.addEventListener('click', (evt) => {
    Analytics.record('AWS Amplify Tutorial Event')
        .then( (evt) => {
            const url = 'https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/'+awsconfig.aws_mobile_analytics_app_id+'/analytics/events';
            AnalyticsResult.innerHTML = '<p>Event Submitted.</p>';
            AnalyticsResult.innerHTML += '<p>Events sent: '+(++EventsSent)+'</p>';
            AnalyticsResult.innerHTML += '<a href="'+url+'" target="_blank">View Events on the Amazon Pinpoint Console</a>';
        });
});


