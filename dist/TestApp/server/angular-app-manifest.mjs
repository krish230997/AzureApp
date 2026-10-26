
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/',
  criticalCssPlans: [[1,"/styles-5INURTSO.css",0,[],[],[]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/fst",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/fst"
  },
  {
    "renderMode": 2,
    "route": "/scnd"
  },
  {
    "renderMode": 2,
    "route": "/thrd"
  },
  {
    "renderMode": 2,
    "route": "/frth"
  },
  {
    "renderMode": 2,
    "route": "/fm1"
  },
  {
    "renderMode": 2,
    "route": "/fm2"
  },
  {
    "renderMode": 2,
    "route": "/testapi"
  },
  {
    "renderMode": 2,
    "route": "/testc"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1231, hash: '44ef0abdea2599ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1744, hash: '5028d135aa70773f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'testc/index.html': {size: 4101, hash: '77259d2a85eac00c', text: () => import('./assets-chunks/testc_index_html.mjs').then(m => m.default)},
    'thrd/index.html': {size: 4875, hash: 'c3da71f6cfd27715', text: () => import('./assets-chunks/thrd_index_html.mjs').then(m => m.default)},
    'fm2/index.html': {size: 4879, hash: '6b834bd903162e42', text: () => import('./assets-chunks/fm2_index_html.mjs').then(m => m.default)},
    'scnd/index.html': {size: 5015, hash: '4bdf85a2eed91446', text: () => import('./assets-chunks/scnd_index_html.mjs').then(m => m.default)},
    'fm1/index.html': {size: 4879, hash: '387174fc3928f58b', text: () => import('./assets-chunks/fm1_index_html.mjs').then(m => m.default)},
    'frth/index.html': {size: 4556, hash: 'ab27707e1667944d', text: () => import('./assets-chunks/frth_index_html.mjs').then(m => m.default)},
    'testapi/index.html': {size: 7408, hash: 'd0d5ddc361d54ef0', text: () => import('./assets-chunks/testapi_index_html.mjs').then(m => m.default)},
    'fst/index.html': {size: 4175, hash: 'b7ddc2583820afe8', text: () => import('./assets-chunks/fst_index_html.mjs').then(m => m.default)}
  },
};
