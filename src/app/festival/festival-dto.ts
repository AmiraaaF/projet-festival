export interface FestivalDto {
    name: string
    location: string
    year: number
    state?: 'upcoming' | 'ongoing' | 'past';  // ? signifie que c'est optionnel
    
    
}
