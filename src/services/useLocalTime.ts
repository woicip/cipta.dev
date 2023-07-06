import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface TimeData {
    abbreviation: string,
    client_ip: string,
    datetime: string,
    day_of_week: number,
    day_of_year: number,
    dst: boolean,
    dst_from: any,
    dst_offset: number,
    dst_until: any,
    raw_offset: number,
    timezone: string,
    unixtime: number,
    utc_datetime: string,
    utc_offset: string,
    week_number: number
}

function useLocalTime(){
    const query = useQuery({
        queryKey: ['useLocalTime'], 
        queryFn: async () => {
            const data = await axios({
                method: "GET",
                url: "https://worldtimeapi.org/api/timezone/Asia/Jakarta",
                headers: { 'Accept': 'application/json' }
            })
            
            const result = data.data as TimeData
            return result
        }
    })

    return query;
}

export default useLocalTime;