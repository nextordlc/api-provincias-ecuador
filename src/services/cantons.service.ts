import { db } from "../config/database";

const getListCantonsById = async (id:any)=>{
        const { data, error } = await db.supabase
                .from('cantones_ecuador')
                .select('id,canton,id_provincia')
                .eq('id',id)
                .single();
        if(error) throw error;
        return data;
}

const getCantonsByProvId = async (id:any)=>{
    const { data, error } = await db.supabase
            .from('cantones_ecuador')
            .select('id,canton,id_provincia')
            .eq('id_provincia',id);
    if(error) throw error;
    return data;
}

export const cantonService = {
    getListCantonsById,
    getCantonsByProvId  
}