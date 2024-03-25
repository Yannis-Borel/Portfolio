const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaCard {
id?: string;
nom_projet: string;
screen_site: string;
description_card: string;
description_projet1: string;
description_projet2: string;
description_projet3: string;
description_projet4: string;
outils_utilise1: string;
outils_utilise2: string;
outils_utilise3: string;
outils_utilise4: string;
image_projet: string;
image_projet2: string;
lien_figma: string;
lien_site: string;
}
// prix: number;
// favori: boolean;
// image: string;
// nbrChambres: number;
// nbrSDB: number;
// adresse: string;
// surface: string;
