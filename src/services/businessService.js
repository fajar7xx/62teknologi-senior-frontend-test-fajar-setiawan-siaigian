import API from '@/utils/API'
import urls from  '@/constant/urls'

const businessService = {
    getAllSearchBusinesses() {
        return API.get(`${urls.SearchBusiness}?location=nyc`)
    }, 
    getBusiness(businessId){
        return API.get(`${urls.Businesses}/${businessId}`)
    }
}

export default businessService