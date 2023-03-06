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
    },

    getDeliberationPerYear: async () => {
        const uri = "http://localhost:8000/api/v1/deliberation"

        try {
            const response = await axios.get(uri)
            const datas = response.data

            const results = {
                labels: [],
                data: []
            }

            datas.forEach(data => {
                results.labels.push(data.annee)
                results.data.push(data.moyenne)
            })

            return results
        } 
        catch (error) {
            return error
        }
    },

    getFormattedDeliberations: async () => {
        const uri = "http://localhost:8000/api/v1/deliberation"

        try {
            const response = await axios.get(uri)
            const datas = response.data

            const results = {
                strikes: {
                    students: {
                        labels: [],
                        data: []
                    },
    
                    professors: {
                        labels: [],
                        data: []
                    },
    
                    staff: {
                        labels: [],
                        data: []
                    }
                },
                scores: {
                    labels: [],
                    data: []
                },
                hours: {
                    labels: [],
                    data: []
                }
            }

            datas.forEach(data => {
                results.strikes.students.labels.push(data.annee)
                results.strikes.students.data.push(data.gr_etu)

                results.strikes.professors.labels.push(data.annee)
                results.strikes.professors.data.push(data.gr_ens)

                results.strikes.staff.labels.push(data.annee)
                results.strikes.staff.data.push(data.gr_pat)

                results.scores.labels.push(data.annee)
                results.scores.data.push(data.moyenne)

                results.hours.labels.push(data.annee)
                results.hours.data.push(data.heure_etude_hebd)
            })

            return results
        } 
        catch (error) {
            return error
        }
    },

    fetchTheses: async () => {
        const uri = "http://localhost:8000/api/v1/thesis"

        try {
            const response = await axios.get(uri)
            return response
        } 
        catch (error) {
            return error    
        }
    },

    getSamplesPerJobDomains: async () => {
        const uri = "http://localhost:8000/api/v1/thesis/job/samples"

        try {
            const response = await axios.get(uri)
            return response    
        } 
        catch (error) {
            return error
        }
    },

    getSamplesPerThesisDomains: async () => {
        const uri = "http://localhost:8000/api/v1/thesis/theses/samples"

        try {
            const response = await axios.get(uri)
            return response    
        } 
        catch (error) {
            return error
        }
    },
    
    verifyToken: async () => {
        const uri = "http://localhost:8000/api/v1/verify-token"

        try {
            const response = await axios.get(uri, {withCredentials: true})
            return response
        }
        catch (error) {
            return error
        }
    },

    logout: async () => {
        const uri = "http://localhost:8000/api/v1/auth/logout"

        try {
            const response = await axios.get(uri, {withCredentials: true})
            return response    
        } 
        catch (error) {
            return error
        }
    }
}

export { api }

