import axios from "axios"

const api = {
    fetchDeliberations: async () => {
        const uri = "http://localhost:8000/api/v1/deliberation"
    
        try {
            const response = await axios.get(uri)
            return response
        } 
        catch (error) {
            return error
        }
    },

    predictDeliberation: async (body) => {
        const uri = "http://localhost:8000/api/v1/deliberation/predict"
    
        try {
            const response = await axios.post(uri, body)
            return response
        } 
        catch (error) {
            return error
        }
    },

    fetchMentions: async () => {
        const uri = "http://localhost:8000/api/v1/mention"
    
        try {
            const response = await axios.get(uri)
            return response
        } 
        catch (error) {
            return error
        }
    },

    fetchMentionBySigle: async (sigle) => {
        const uri = `http://localhost:8000/api/v1/mention/sigle/${sigle}`
    
        try {
            const response = await axios.get(uri)
            return response
        } 
        catch (error) {
            return error
        }
    },

    fetchMentionById: async (id) => {
        const uri = `http://localhost:8000/api/v1/mention/${id}`
    
        try {
            const response = await axios.get(uri)
            return response
        } 
        catch (error) {
            return error
        }
    },
    recommendOrientation: async (body) => {
        const uri = "http://localhost:8000/api/v1/orientation/recommend"
    
        try {
            const response = await axios.post(uri, body)
            return response
        } 
        catch (error) {
            return error
        }
    }
}

export { api }

