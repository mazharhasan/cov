import axios from 'axios'
export const baseUrl = 'https://paradisecentre.pk/wp-json/wc/v3/'
const Consumer_key='ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e';
const Consumer_secret= 'cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
const keys='consumer_key=ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e&consumer_secret=cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
export const getAllProducts = async () => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products?'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getAllProducts : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getAllProducts : ', handleError)
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const getAllCategories = async () => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products/categories?'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getAllCategories : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getAllCategories : ', handleError)
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const getProductByID = async (id) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products/categories/'+id+'?'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getProductByID : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getProductByID : ', handleError)
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  