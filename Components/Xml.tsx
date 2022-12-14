import React, { ReactElement } from 'react';
import { ImgData, Mockup } from '../pages';
import builder from 'xmlbuilder';
import { off } from 'process';

interface XmlProps {
  imagesList: ImgData[];
}

const Xml: React.FC<XmlProps> = ({ imagesList }) => {
  let feedObj: any = [];

  if (imagesList.length > 0) {
    imagesList.forEach((img) => {
      let plaBlack = img?.images?.filter(
        (img) => img?.imgType === Mockup.PLA_BLACK
      );
      let plaWhite = img?.images?.filter(
        (img) => img?.imgType === Mockup.PLA_WHITE
      );
      let design1 = img?.images?.filter(
        (img) => img?.imgType === Mockup.DESIGN1
      );
      let design2 = img?.images?.filter(
        (img) => img?.imgType === Mockup.DESIGN2
      );
      const obj = {
        SHOPITEM: {
          '@id': img?.title,
          NAME: { '#text': img?.title },
          SHORT_DESCRIPTION: { '#text': `${img?.description} ${img?.description}`},
          DESCRIPTION: { '#text': DESCRIPTION },
          MANUFACTURER: { '#text': 'Pixada' },
          ITEM_TYPE: { '#text': 'product' },
          UNIT: { '#text': 'ks' },
          IMAGES: {
            IMAGE: { '#text': plaBlack[0]?.url },
            IMAGE2: { '#text': plaWhite[0]?.url },
            IMAGE3: { '#text': design1[0]?.url },
            IMAGE4: { '#text': design2[0]?.url },
          },
          CATEGORIES: {
            CATEGORY: { '#text': img?.category },
          },
          VISIBILITY: { '#text': 'visible' },
          SEO_TITLE: { '#text': img?.title },
          META_DESCRIPTION: { '#text': img?.description },
          VARIANTS: {
            VARIANT: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/A3/PLA` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 349 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'A3 - 29,7x42 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 'plak??t bez r??mu' },
                },
              },
            },
            VARIANT1: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/A3/S` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 699 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              IMAGE_REF: {
                '#text': plaBlack[0]?.url,
              },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'A3 - 29,7x42 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 's ??ern??m r??mem' },
                },
              },
            },
            VARIANT2: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/A3/S2` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 699 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: {
                '#text': plaWhite[0]?.url,
              },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'A3 - 29,7x42 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 's b??l??m r??mem' },
                },
              },
            },
            VARIANT3: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/B2/PLA` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 599 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'B2 - 50x70 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 'plak??t bez r??mu' },
                },
              },
            },
            VARIANT4: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/B2/S` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 1049 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: {
                '#text': plaBlack[0]?.url,
              },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'B2 - 50x70 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 's ??ern??m r??mem' },
                },
              },
            },
            VARIANT5: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': `${img?.title}/B2/S2` },
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 1049 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: {
                '#text': plaWhite[0]?.url,
              },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'B2 - 50x70 cm' },
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba r??mu' },
                  VALUE: { '#text': 's b??l??m r??mem' },
                },
              },
            },
          },
        },
      };
      feedObj.push(obj);
    });
  }

  const feed =
    feedObj.length > 0 && builder.create(feedObj, { encoding: 'utf-8' });

  const xml = feedObj.length > 0 && feed.end({ pretty: true });

  const addedTags = '<SHOP>' + xml + '</SHOP>';

  // while (addedTags.includes('abc')) {
  //   str = str.replace('abc', 'replaced text');
  // }
  const finishedXml = addedTags
    .split('VARIANT2')
    .join('VARIANT')
    .split(`<?xml version="1.0" encoding="utf-8"?>`)
    .join('')
    .split('VARIANT1')
    .join('VARIANT')
    .split('VARIANT2')
    .join('VARIANT')
    .split('VARIANT3')
    .join('VARIANT')
    .split('VARIANT4')
    .join('VARIANT')
    .split('VARIANT5')
    .join('VARIANT')
    .split('VLASTNOST1')
    .join('PARAMETER')
    .split('VLASTNOST2')
    .join('PARAMETER')
    .split('IMAGE2')
    .join('IMAGE')
    .split('IMAGE3')
    .join('IMAGE')
    .split('IMAGE4')
    .join('IMAGE');

  const downloadXml = () => {
    var filename = 'file.xml';
    var pom = document.createElement('a');
    var bb = new Blob([finishedXml], { type: 'text/plain' });

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
  };
  return (
    <div>
      <button onClick={() => downloadXml()}>Download XML</button>
    </div>
  );
};

export default Xml;

const DESCRIPTION = `<![CDATA[ <div id="pobo-all-content"> <div id="pobo-standard-widget"> <div class="widget-typography"> <div> <div class="empty"> <div id="pobo-all-content"> <div id="pobo-standard-widget">&nbsp;</div> <div id="pobo-share-widget"> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Kouzlo tisku</h2> <p>V??echny motiva??n?? plak??ty tiskneme na kvalitn?? fotografick?? pap??r o hmotnosti 200 g. Tiskov?? barvy jsou pestr?? a vyniknou v ka??d??m kontrastu. N??sledn?? je pak plak??t o????znut do po??adovan??ho rozm??ru.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/5hynlwgjvm0wfldaut66-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/qa0fyaj5eo5zojy4k08h-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>Rozm??ry plak??t??</h2> <p>Motiva??n?? plak??ty vyr??b??me o rozm??ru A3 (42x29,7cm) a B2 (50x70 cm). Men???? form??t obrazu je sv??m rozm??rem decentn??j???? a vhodn?? pro dopln??n?? interi??ru ??i sestaven?? sady obr??zk?? vedle sebe. Vet???? form??t naopak na zdi v??ce vynikne a pat???? tak mezi viditeln?? dominanty v m??stnosti a kancel????i.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Motivy</h2> <p>Proto??e ka??d?? ??lov??k m?? trochu jin?? vkus a jinou motivaci k dosa??en?? sv??ch c??l??, tak u motiva??n??ch plak??t?? si m????ete vybrat z v??ce variant. Mezi nejobl??ben??j???? plak??ty pat???? nap????klad Ledovec ??sp??chu, cesta bez p??ek????ek nikam nevede, trust yourself a dal????. M????ete n??m tak?? napsat, pokud m??te n??jak?? speci??ln?? p????n?? a pokus??me se tento motiv za??adit.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/7lzy9rmge8q2svpsisxa-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/6se7kjq3oadszb6yjafv-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>R??my a obrazy</h2> <p>Z motiva??n??ch plak??t?? si m????ete u n??s nechat ud??lat motiva??n?? obraz t??m, ??e si ho od n??s nech??te zar??movat. R??my si vyr??b??me ru??n?? ve vlastn?? truhl????sk?? d??ln?? a t??m m????eme zajistit perfektn?? zpracov??n?? a pou??it?? t??ch nejkvalitn??j????ch materi??l??. Li??ty jsou vyrobeny z jiho??esk?? borovice, kde za ka??d?? pok??cen?? strom jsou vysazeny 2 nov?? do ??koly. Kvalitn?? spoj je zaru??en nalisov??n??m r??mov??ch spon. Do p??edn?? strany obrazu je m??sto skla usazeno plexisklo, aby nedoch??zelo k poni??en?? p??i p??eprav?? nebo manipulaci.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Balen?? z??silek</h2> <p>Prvn?? dojem p??i p??evzet?? z??silky je velmi podstatn??. Na balen?? klademe velk?? d??raz, aby se zamezilo tomu, ??e bal????ek p??ijde poni??en??. Motiva??n?? plak??ty pos??l??me v pevn??m ekologick??m tubusu. Jsou tak dokonale chr??n??ny proti poma??k??n??. P??i objedn??vce d??ev??n??ho r??mu, V??m r??m zabal??me do pevn?? krabice, kter?? je vyztu??ena bublinkovou f??li??. Tato kombinace poskytuje dostate??nou ochranu proti p????padn??m n??raz??m ??i jin?? manipulaci. V p????pad?? objedn??vky motiva??n??ho plak??tu a r??mu, plak??t zdarma zar??mujeme, kdy?? bal????ek p??ijde, tak jedin?? va??e starost je, kam si obraz pov??s??te.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/ejx2krmdsa9tnqh81iqw-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-advantages-three"> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/dpsehm1mild3w68aepnb-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">Odes??l??me do 12 hodin</h2> <span class="rc-advantages-three__info-text"> V??t??inu objedn??vek jsme schopni zabalit je??t?? tent???? den. Pokud objedn??vka p??ijde ji?? odpoledne, tak objedn??vku bal??me hned r??no n??sleduj??c?? den. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/klzn2xvf6xgwuy42mjc5-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">90 dn?? na vr??cen??</h2> <span class="rc-advantages-three__info-text"> Pokud si n??kup rozmysl??te, m????ete zbo???? bezplatn?? vr??tit do 90 dn?? od p??ijet?? bal????ku. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/3n0dc6p7gqx4694e3bh3-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">??esk?? v??robek</h2> <span class="rc-advantages-three__info-text"> Jsme ??esk?? v??robce plak??t?? a r??m??. Firma s nad??en??m pro to co d??l??. Jak kancel????e, tak i d??lnu m??me v P??sku na jihu ??ech. </span></div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div id="pobo-share-widget">&nbsp;</div> </div> ]]>`;
