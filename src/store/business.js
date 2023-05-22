import { defineStore } from "pinia"
import businessService from "@/services/businessService"

export const useBusinessStore = defineStore('business', {
    state: () => {
        return {
            businesses: [],
            business: {},
            region: {},
            total: 0
        }
    },

    actions: {
        async SearchBusinesses(){
            try{
                const response = await businessService.getAllSearchBusinesses()
                console.log(response.data)
                this.businesses = response.data.businesses
                this.region = response.data.region
                this.total = response.data.total
            }catch(err){
                console.group('error fetch data')
                console.log(err)
                console.groupEnd()

                throw err
            }
        },

        async getBusiness(businessId){
            try{
                const response = await businessService.getBusiness(businessId)
                console.log(response)
            }catch(err){
                console.group('error fetch detail')
                console.log(err)
                console.groupEnd()

                throw err
            }
        }
    }
})