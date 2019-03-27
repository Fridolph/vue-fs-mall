interface HttpOptions {
  url: string,
  method?: string,
  isAsync?: boolean
}

interface HttpReponseData {
  code: number,
  data?: any
}

function http(options: HttpOptions) {
  let opt: HttpOptions = {
    ...options,
    method: 'get',
    isAsync: true
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(opt.method, opt.url, opt.isAsync)
    xhr.onload = function() {
      let data: HttpReponseData = JSON.parse(xhr.responseText)
      resolve(data)
    }
    xhr.onerror = function(e) {
      reject({
        code: xhr.response.code,
        message: '出错了'
      })
    }
    xhr.send()
  })
}

http({
  url: ''
}).then((res: HttpReponseData) => {
  // res.code
})
