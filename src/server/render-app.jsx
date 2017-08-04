// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import { SheetsRegistry, SheetsRegistryProvider } from 'react-jss'

import initStore from './init-store'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const googleAnalytics = `<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID || ''}', 'auto');
  </script>`

const fullStoryAnalytics = `<script>
    window['_fs_debug'] = false;
    window['_fs_host'] = 'fullstory.com';
    window['_fs_org'] = '${process.env.FULL_STORY_ID || ''}';
    window['_fs_namespace'] = 'FS';
    (function(m,n,e,t,l,o,g,y){
        if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
        g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
        o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
        g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
        g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
        g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match(${"'fs_uid=[`;`]*`[`;`]*`[`;`]*`'"})){
        d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
        ';path=/;expires='+new Date(0).toUTCString();i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}};
    })(window,document,window['_fs_namespace'],'script','user');
  </script>`

const renderApp = (location: string, plainPartialState: ?Object, existingStore: ?Object) => {
  const store = existingStore || initStore(plainPartialState)
  const sheets = new SheetsRegistry()
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={{}}>
        <SheetsRegistryProvider registry={sheets}>
          <App />
        </SheetsRegistryProvider>
      </StaticRouter>
    </Provider>)

  // must come after renderToString
  // head data for a page is extracted from components after
  // renderToString
  const head = Helmet.rewind()

  return (
    `<!DOCTYPE html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${STATIC_PATH}/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <link rel="stylesheet" href="${STATIC_PATH}/css/cover.css">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>

        ${process.env.GOOGLE_ANALYTICS_TRACKING_ID ? googleAnalytics : ''}

        ${process.env.FULL_STORY_ID ? fullStoryAnalytics : ''}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
