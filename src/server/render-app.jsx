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
        <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
        <link rel="stylesheet" href="${STATIC_PATH}/css/react-notifications.css">
        <style>
          /*
           * Globals
           */

          /* Links */
          a,
          a:focus,
          a:hover {
            color: #fff;
          }

          /* Custom default button */
          .btn-secondary,
          .btn-secondary:hover,
          .btn-secondary:focus {
            color: #333;
            text-shadow: none; /* Prevent inheritance from 'body' */
            background-color: #fff;
            border: .05rem solid #fff;
          }


          /*
           * Base structure
           */

          html,
          body {
            height: 100%;
            background: url('${STATIC_PATH}/img/background.jpg');
            background-size: cover;
            background-attachment: fixed;
            font-family: 'Play', sans-serif;
          }
          body {
            color: #fff;
            text-align: center;
            text-shadow: 0 .05rem .1rem rgba(0,0,0,.5);
          }

          /* Extra markup and styles for table-esque vertical and horizontal centering */
          .site-wrapper {
            display: table;
            width: 100%;
            height: 100vh; /* For at least Firefox */
            min-height: 100vh;
            -webkit-box-shadow: inset 0 0 5rem rgba(0,0,0,.5);
                    box-shadow: inset 0 0 5rem rgba(0,0,0,.5);
          }
          .site-wrapper-inner {
            display: table-cell;
            vertical-align: top;
          }
          .cover-container {
            margin-right: auto;
            margin-left: auto;
          }

          /* Padding for spacing */
          .inner {
            padding: 2rem;
          }


          /*
           * Header
           */

          .masthead {
            margin-bottom: 2rem;
          }

          .masthead-brand {
            margin-bottom: 0;
          }

          .nav-masthead .nav-link {
            padding: .25rem 0;
            font-weight: bold;
            color: rgba(255,255,255,.5);
            background-color: transparent;
            border-bottom: .25rem solid transparent;
          }

          .nav-masthead .nav-link:hover,
          .nav-masthead .nav-link:focus {
            border-bottom-color: rgba(255,255,255,.25);
          }

          .nav-masthead .nav-link + .nav-link {
            margin-left: 1rem;
          }

          .nav-masthead .active {
            color: #fff;
            border-bottom-color: #fff;
          }

          @media (min-width: 48em) {
            .masthead-brand {
              float: left;
            }
            .nav-masthead {
              float: right;
            }
          }


          /*
           * Cover
           */

          .cover {
            padding: 0 1.5rem;
          }
          .cover .btn-lg {
            padding: .75rem 1.25rem;
            font-weight: bold;
          }


          /*
           * Footer
           */

          .mastfoot {
            color: rgba(255,255,255,.5);
          }


          /*
           * Affix and center
           */

          @media (min-width: 40em) {
            /* Pull out the header and footer */
            .masthead {
              position: fixed;
              top: 0;
            }
            .mastfoot {
              position: fixed;
              bottom: 0;
            }
            /* Start the vertical centering */
            .site-wrapper-inner {
              vertical-align: middle;
            }
            /* Handle the widths */
            .masthead,
            .mastfoot,
            .cover-container {
              width: 100%; /* Must be percentage or pixels for horizontal alignment */
            }
          }

          @media (min-width: 62em) {
            .masthead,
            .mastfoot,
            .cover-container {
              width: 100%;
            }
          }

          /* === 10.SUBSCRIBE === */
          .bs4-newsletter{
            padding: 80px 0;
          }
          .bs4-newsletter form{
            max-width: 600px;
            margin: 0 auto;
          }
          .bs4-newsletter .input-subscribe {
            background-color: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.4);
            height: 50px;
            padding-left: 20px;
            box-shadow: none !important;
            margin-bottom: 10px;
          }
          .bs4-newsletter .text-light {
              color: rgba(255, 255, 255, 0.7);
          }
          .bs4-newsletter .input-subscribe:focus {
            border: 2px solid rgba(255, 255, 255, 0.6);
          }

          .bs4-newsletter input.input-subscribe::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.4);
            font-weight: normal;
          }

          .bs4-newsletter input.input-subscribe:-moz-placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          .bs4-newsletter input.input-subscribe::-moz-placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          .bs4-newsletter input.input-subscribe:-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          .bs4-newsletter label.valid {
            color: #ffffff;
            font-weight: normal;
            margin: 10px 0;
          }
          .bs4-newsletter .btn-white-fill {
              padding: 8px 24px !important;
              background-color: #ffffff;
              border: 2px solid rgba(255, 255, 255, 0.75) !important;
              border-radius: 50px;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 0.04em;
          }

          .toggle_radio{
            position: relative;
            background: rgba(255,255,255,.1);
            margin: 4px auto;
            overflow: hidden;
            padding: 0 !important;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
            position: relative;
            height: 36px;
            width: 215px;
          }
          .toggle_radio > * {
            float: left;
          }
          .toggle_radio input[type=radio]{
            display: none;
            /*position: fixed;*/
          }
          .toggle_radio label{
            color: rgba(255,255,255,.9);
            z-index: 0;
            display: block;
            width: 100px;
            height: 30px;
            margin: 3px 3px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
            cursor: pointer;
            z-index: 1;
            /*background: rgba(0,0,0,.1);*/
            text-align: center;
            /*margin: 0 2px;*/
            /*background: blue;*/ /*make it blue*/
          }
          .toggle_option_slider{
            /*display: none;*/
            /*background: red;*/
            width: 100px;
            height: 29px;
            position: absolute;
            top: 3px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
            -webkit-transition: all .4s ease;
            -moz-transition: all .4s ease;
            -o-transition: all .4s ease;
            -ms-transition: all .4s ease;
            transition: all .4s ease;
          }

          #first_toggle:checked ~ .toggle_option_slider{
            background: rgba(255,255,255,.3);
            left: 3px;
          }
          #second_toggle:checked ~ .toggle_option_slider{
            background: rgba(255,255,255,.3);
            left: 109px;
          }
        </style>
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
