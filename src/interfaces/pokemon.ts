export interface PokemonList {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}



export interface Pokemon {
  abilities:                any[];
  base_experience:          number;
  forms:                    any[];
  game_indices:             any[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    any[];
  name:                     string;
  order:                    number;
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    StatElement[];
  types:                    Type[];
  weight:                   number;
}

export interface Species {
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

export interface Crystal {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

export interface Gold {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald:             Emerald;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

export interface Emerald {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface StatElement {
  base_stat: number;
  effort:    number;
  stat:      TypeClass;
}

export interface TypeClass {
  name: string;
  url:  string;
}

export interface Type {
  slot: number;
  type: TypeClass;
}
