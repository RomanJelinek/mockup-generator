import React, { ReactElement } from 'react';
import { ImgData } from '../pages';
import builder from 'xmlbuilder';
import { off } from 'process';

interface XmlProps {
  imagesList: ImgData[];
}

const Xml: React.FC<XmlProps> = ({ imagesList }) => {
  let feedObj: any = [];

  if (imagesList.length > 0) {
    for (let i = 0; i < imagesList.length; i++) {}
    imagesList.forEach((img) => {
      const obj = {
        SHOPITEM: {
          '@id': img.url, //todo
          NAME: { '#text': 'jméno' }, //todo
          SHORT_DESCRIPTION: { '#text': 'Krátký popisek' }, //todo
          DESCRIPTION: { '#text': DESCRIPTION },
          MANUFACTURER: { '#text': 'Pixada' },
          ITEM_TYPE: { '#text': 'product' },
          UNIT: { '#text': 'ks' },
          IMAGES: {
            IMAGE: { '#text': 'IMG' }, //todo
          },
          CATEGORIES: {
            CATEGORY: { '#text': 'Kategorie' }, //todo
          },
          VISIBILITY: { '#text': 'visible' },
          SEO_TITLE: { '#text': 'SEO POPIS' }, //todo
          META_DESCRIPTION: { '#text': 'META' }, //todo
          VARIANTS: {
            VARIANT: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/A3/PLA' }, // TODO
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
                  VALUE: { '#text': 'A3 - 29,7x42 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 'plakát bez rámu' }, // CHANGES
                },
              },
            },
            VARIANT1: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/A3/S' }, // TODO
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 699 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              IMAGE_REF: { '#text': 'image url' }, // TODO
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'A3 - 29,7x42 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's černým rámem' }, // CHANGES
                },
              },
            },
            VARIANT2: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/A3/S2' }, // TODO
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 699 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: { '#text': 'URL' }, // TODO
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'A3 - 29,7x42 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's bílým rámem' }, // CHANGES
                },
              },
            },
            VARIANT3: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/B2/PLA' }, // TODO
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
                  VALUE: { '#text': 'B2 - 50x70 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 'plakát bez rámu' }, // CHANGES
                },
              },
            },
            VARIANT4: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/B2/S' }, // TODO
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 1049 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: { '#text': 'URL' }, //TODO
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'B2 - 50x70 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's černým rámem' }, // CHANGES
                },
              },
            },
            VARIANT5: {
              STOCK: {
                AMOUNT: { '#text': 1000 },
              },
              CODE: { '#text': 'ID/B2/S2' }, // TODO
              WEIGHT: { '#text': 1 },
              CURRENCY: { '#text': 'CZK' },
              VAT: { '#text': 21 },
              PRICE_VAT: { '#text': 1049 },
              AVAILABILITY_IN_STOCK: { '#text': 'Skladem' },
              IMAGE_REF: { '#text': 'URL' }, //TODO
              VISIBLE: { '#text': 1 },
              FIRMY_CZ: { '#text': 1 },
              PARAMETERS: {
                VLASTNOST1: {
                  NAME: { '#text': 'Velikost' },
                  VALUE: { '#text': 'B2 - 50x70 cm' }, // CHANGES
                },
                VLASTNOST2: {
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's bílým rámem' }, // CHANGES
                },
              },
            },
          },
        },
      };
      feedObj.push(obj);
    });
  }

  const feed = feedObj.length > 0 &&  builder.create(feedObj, { encoding: 'utf-8' });

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
    .join('PARAMETER');

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

const DESCRIPTION = `<![CDATA[ <div id="pobo-all-content"><div id="pobo-standard-widget"><div class="widget-typography"> <div> <div class="empty"> <div id="pobo-all-content"> <div id="pobo-standard-widget">&nbsp;</div> <div id="pobo-share-widget"> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Kouzlo tisku</h2> <p>Všechny motivační plakáty tiskneme na kvalitní fotografický papír o hmotnosti 200 g. Tiskové barvy jsou pestré a vyniknou v každém kontrastu. Následně je pak plakát oříznut do požadovaného rozměru.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/5hynlwgjvm0wfldaut66-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/qa0fyaj5eo5zojy4k08h-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>Rozměry plakátů</h2> <p>Motivační plakáty vyrábíme o rozměru A3 (42x29,7cm) a B2 (50x70 cm). Menší formát obrazu je svým rozměrem decentnější a vhodný pro doplnění interiéru či sestavení sady obrázků vedle sebe. Vetší formát naopak na zdi více vynikne a patří tak mezi viditelné dominanty v místnosti a kanceláři.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Motivy</h2> <p>Protože každý člověk má trochu jiný vkus a jinou motivaci k dosažení svých cílů, tak u motivačních plakátů si můžete vybrat z více variant. Mezi nejoblíbenější plakáty patří například Ledovec úspěchu, cesta bez překážek nikam nevede, trust yourself a další. Můžete nám také napsat, pokud máte nějaké speciální přání a pokusíme se tento motiv zařadit.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/7lzy9rmge8q2svpsisxa-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/6se7kjq3oadszb6yjafv-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>Rámy a obrazy</h2> <p>Z motivačních plakátů si můžete u nás nechat udělat motivační obraz tím, že si ho od nás necháte zarámovat. Rámy si vyrábíme ručně ve vlastní truhlářské dílně a tím můžeme zajistit perfektní zpracování a použití těch nejkvalitnějších materiálů. Lišty jsou vyrobeny z jihočeské borovice, kde za každý pokácený strom jsou vysazeny 2 nové do školy. Kvalitní spoj je zaručen nalisováním rámových spon. Do přední strany obrazu je místo skla usazeno plexisklo, aby nedocházelo k poničení při přepravě nebo manipulaci.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Balení zásilek</h2> <p>První dojem při převzetí zásilky je velmi podstatný. Na balení klademe velký důraz, aby se zamezilo tomu, že balíček přijde poničený. Motivační plakáty posíláme v pevném ekologickém tubusu. Jsou tak dokonale chráněny proti pomačkání. Při objednávce dřevěného rámu, Vám rám zabalíme do pevné krabice, která je vyztužena bublinkovou fólií. Tato kombinace poskytuje dostatečnou ochranu proti případným nárazům či jiné manipulaci. V případě objednávky motivačního plakátu a rámu, plakát zdarma zarámujeme, když balíček přijde, tak jediná vaše starost je, kam si obraz pověsíte.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/ejx2krmdsa9tnqh81iqw-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-advantages-three"> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/dpsehm1mild3w68aepnb-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">Odesíláme do 12 hodin</h2> <span class="rc-advantages-three__info-text"> Většinu objednávek jsme schopni zabalit ještě tentýž den. Pokud objednávka přijde již odpoledne, tak objednávku balíme hned ráno následující den. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/klzn2xvf6xgwuy42mjc5-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">90 dní na vrácení</h2> <span class="rc-advantages-three__info-text"> Pokud si nákup rozmyslíte, můžete zboží bezplatně vrátit do 90 dní od přijetí balíčku. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/3n0dc6p7gqx4694e3bh3-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">Český výrobek</h2> <span class="rc-advantages-three__info-text"> Jsme český výrobce plakátů a rámů. Firma s nadšením pro to co dělá. Jak kanceláře, tak i dílnu máme v Písku na jihu Čech. </span></div> </div> </div> </div> </div> </div> </div> </div> </div></div><div id="pobo-share-widget"> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Kouzlo tisku</h2><p>V&scaron;echny motivačn&iacute; plak&aacute;ty tiskneme na kvalitn&iacute; fotografick&yacute; pap&iacute;r o hmotnosti 200 g. Tiskov&eacute; barvy jsou pestr&eacute; a vyniknou v každ&eacute;m kontrastu. N&aacute;sledně je pak plak&aacute;t oř&iacute;znut do požadovan&eacute;ho rozměru. </p> </div> <div class="rc-image-right__image"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/5hynlwgjvm0wfldaut66-md.jpeg" class="rc-image-right__img"> </div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/qa0fyaj5eo5zojy4k08h-md.jpeg" class="rc-image-left__img"> </div> <div class="rc-image-left__text"> <h2>Rozměry plak&aacute;tů</h2><p>Motivačn&iacute; plak&aacute;ty vyr&aacute;b&iacute;me o rozměru A3 (42x29,7cm) a B2 (50x70 cm). Men&scaron;&iacute; form&aacute;t obrazu je sv&yacute;m rozměrem decentněj&scaron;&iacute; a vhodn&yacute; pro doplněn&iacute; interi&eacute;ru či sestaven&iacute; sady obr&aacute;zků vedle sebe. Vet&scaron;&iacute; form&aacute;t naopak na zdi v&iacute;ce vynikne a patř&iacute; tak mezi viditeln&eacute; dominanty v m&iacute;stnosti a kancel&aacute;ři.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Motivy</h2><p>Protože každ&yacute; člověk m&aacute; trochu jin&yacute; vkus a jinou motivaci k dosažen&iacute; sv&yacute;ch c&iacute;lů, tak u motivačn&iacute;ch plak&aacute;tů si můžete vybrat z v&iacute;ce variant. Mezi nejobl&iacute;beněj&scaron;&iacute; plak&aacute;ty patř&iacute; např&iacute;klad Ledovec &uacute;spěchu, cesta bez přek&aacute;žek nikam nevede, trust yourself a dal&scaron;&iacute;. Můžete n&aacute;m tak&eacute; napsat, pokud m&aacute;te nějak&eacute; speci&aacute;ln&iacute; př&aacute;n&iacute; a pokus&iacute;me se tento motiv zařadit.</p> </div> <div class="rc-image-right__image"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/7lzy9rmge8q2svpsisxa-md.jpeg" class="rc-image-right__img"> </div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/6se7kjq3oadszb6yjafv-md.jpeg" class="rc-image-left__img"> </div> <div class="rc-image-left__text"> <h2>R&aacute;my a obrazy</h2><p>Z motivačn&iacute;ch plak&aacute;tů si můžete u n&aacute;s nechat udělat motivačn&iacute; obraz t&iacute;m, že si ho od n&aacute;s nech&aacute;te zar&aacute;movat. R&aacute;my si vyr&aacute;b&iacute;me ručně ve vlastn&iacute; truhl&aacute;řsk&eacute; d&iacute;lně a t&iacute;m můžeme zajistit perfektn&iacute; zpracov&aacute;n&iacute; a použit&iacute; těch nejkvalitněj&scaron;&iacute;ch materi&aacute;lů. Li&scaron;ty jsou vyrobeny z jihočesk&eacute; borovice, kde za každ&yacute; pok&aacute;cen&yacute; strom jsou vysazeny 2 nov&eacute; do &scaron;koly. Kvalitn&iacute; spoj je zaručen nalisov&aacute;n&iacute;m r&aacute;mov&yacute;ch spon. Do předn&iacute; strany obrazu je m&iacute;sto skla usazeno plexisklo, aby nedoch&aacute;zelo k poničen&iacute; při přepravě nebo manipulaci.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Balen&iacute; z&aacute;silek</h2><p>Prvn&iacute; dojem při převzet&iacute; z&aacute;silky je velmi podstatn&yacute;. Na balen&iacute; klademe velk&yacute; důraz, aby se zamezilo tomu, že bal&iacute;ček přijde poničen&yacute;. Motivačn&iacute; plak&aacute;ty pos&iacute;l&aacute;me v pevn&eacute;m ekologick&eacute;m tubusu. Jsou tak dokonale chr&aacute;něny proti pomačk&aacute;n&iacute;. Při objedn&aacute;vce dřevěn&eacute;ho r&aacute;mu, V&aacute;m r&aacute;m zabal&iacute;me do pevn&eacute; krabice, kter&aacute; je vyztužena bublinkovou f&oacute;li&iacute;. Tato kombinace poskytuje dostatečnou ochranu proti př&iacute;padn&yacute;m n&aacute;razům či jin&eacute; manipulaci. V př&iacute;padě objedn&aacute;vky motivačn&iacute;ho plak&aacute;tu a r&aacute;mu, plak&aacute;t zdarma zar&aacute;mujeme, když bal&iacute;ček přijde, tak jedin&aacute; va&scaron;e starost je, kam si obraz pověs&iacute;te.</p> </div> <div class="rc-image-right__image"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/ejx2krmdsa9tnqh81iqw-md.jpeg" class="rc-image-right__img"> </div> </div> </div> <div> <div class="rc-advantages-three"> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/dpsehm1mild3w68aepnb-md.jpeg" class="rc-advantages-three__ico-img"> </div> <div class="rc-advantages-three__info"> <h2 class="rc-a dvantages-three__info-header"> Odesíláme do 12 hodin </h2> <span class="rc-advantages-three__info-text"> Většinu objednávek jsme schopni zabalit ještě tentýž den. Pokud objednávka přijde již odpoledne, tak objednávku balíme hned ráno následující den. </span> </div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/klzn2xvf6xgwuy42mjc5-md.jpeg" class="rc-advantages-three__ico-img"> </div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header"> 90 dní na vrácení </h2> <span class="rc-advantages-three__info-text"> Pokud si nákup rozmyslíte, můžete zboží bezplatně vrátit do 90 dní od přijetí balíčku. </span> </div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"> <img src="https://cdn.pobo.cz/images/b9544z3k5t98/3n0dc6p7gqx4694e3bh3-md.jpeg" class="rc-advantages-three__ico-img"> </div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header"> Český výrobek </h2> <span class="rc-advantages-three__info-text"> Jsme český výrobce plakátů a rámů. Firma s nadšením pro to co dělá. Jak kanceláře, tak i dílnu máme v Písku na jihu Čech. </span> </div> </div> </div> </div> </div></div> ]]>`;
