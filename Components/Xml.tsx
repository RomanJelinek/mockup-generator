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
          SHORT_DESCRIPTION: { '#text': `${img?.title} ${img?.description}`},
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 'plakát bez rámu' },
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's černým rámem' },
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's bílým rámem' },
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 'plakát bez rámu' },
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's černým rámem' },
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
                  NAME: { '#text': 'Volba rámu' },
                  VALUE: { '#text': 's bílým rámem' },
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

const DESCRIPTION = `<![CDATA[ <div id="pobo-all-content"> <div id="pobo-standard-widget"> <div class="widget-typography"> <div> <div class="empty"> <div id="pobo-all-content"> <div id="pobo-standard-widget">&nbsp;</div> <div id="pobo-share-widget"> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Kouzlo tisku</h2> <p>Všechny motivační plakáty tiskneme na kvalitní fotografický papír o hmotnosti 200 g. Tiskové barvy jsou pestré a vyniknou v každém kontrastu. Následně je pak plakát oříznut do požadovaného rozměru.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/5hynlwgjvm0wfldaut66-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/qa0fyaj5eo5zojy4k08h-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>Rozměry plakátů</h2> <p>Motivační plakáty vyrábíme o rozměru A3 (42x29,7cm) a B2 (50x70 cm). Menší formát obrazu je svým rozměrem decentnější a vhodný pro doplnění interiéru či sestavení sady obrázků vedle sebe. Vetší formát naopak na zdi více vynikne a patří tak mezi viditelné dominanty v místnosti a kanceláři.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Motivy</h2> <p>Protože každý člověk má trochu jiný vkus a jinou motivaci k dosažení svých cílů, tak u motivačních plakátů si můžete vybrat z více variant. Mezi nejoblíbenější plakáty patří například Ledovec úspěchu, cesta bez překážek nikam nevede, trust yourself a další. Můžete nám také napsat, pokud máte nějaké speciální přání a pokusíme se tento motiv zařadit.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/7lzy9rmge8q2svpsisxa-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-image-left"> <div class="rc-image-left__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/6se7kjq3oadszb6yjafv-md.jpeg" class="rc-image-left__img" /></div> <div class="rc-image-left__text"> <h2>Rámy a obrazy</h2> <p>Z motivačních plakátů si můžete u nás nechat udělat motivační obraz tím, že si ho od nás necháte zarámovat. Rámy si vyrábíme ručně ve vlastní truhlářské dílně a tím můžeme zajistit perfektní zpracování a použití těch nejkvalitnějších materiálů. Lišty jsou vyrobeny z jihočeské borovice, kde za každý pokácený strom jsou vysazeny 2 nové do školy. Kvalitní spoj je zaručen nalisováním rámových spon. Do přední strany obrazu je místo skla usazeno plexisklo, aby nedocházelo k poničení při přepravě nebo manipulaci.</p> </div> </div> </div> <div> <div class="rc-image-right"> <div class="rc-image-right__text"> <h2>Balení zásilek</h2> <p>První dojem při převzetí zásilky je velmi podstatný. Na balení klademe velký důraz, aby se zamezilo tomu, že balíček přijde poničený. Motivační plakáty posíláme v pevném ekologickém tubusu. Jsou tak dokonale chráněny proti pomačkání. Při objednávce dřevěného rámu, Vám rám zabalíme do pevné krabice, která je vyztužena bublinkovou fólií. Tato kombinace poskytuje dostatečnou ochranu proti případným nárazům či jiné manipulaci. V případě objednávky motivačního plakátu a rámu, plakát zdarma zarámujeme, když balíček přijde, tak jediná vaše starost je, kam si obraz pověsíte.</p> </div> <div class="rc-image-right__image"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/ejx2krmdsa9tnqh81iqw-md.jpeg" class="rc-image-right__img" /></div> </div> </div> <div> <div class="rc-advantages-three"> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/dpsehm1mild3w68aepnb-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">Odesíláme do 12 hodin</h2> <span class="rc-advantages-three__info-text"> Většinu objednávek jsme schopni zabalit ještě tentýž den. Pokud objednávka přijde již odpoledne, tak objednávku balíme hned ráno následující den. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/klzn2xvf6xgwuy42mjc5-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">90 dní na vrácení</h2> <span class="rc-advantages-three__info-text"> Pokud si nákup rozmyslíte, můžete zboží bezplatně vrátit do 90 dní od přijetí balíčku. </span></div> </div> <div class="rc-advantages-three__item"> <div class="rc-advantages-three__ico-container"><img src="https://cdn.pobo.cz/images/b9544z3k5t98/3n0dc6p7gqx4694e3bh3-md.jpeg" class="rc-advantages-three__ico-img" /></div> <div class="rc-advantages-three__info"> <h2 class="rc-advantages-three__info-header">Český výrobek</h2> <span class="rc-advantages-three__info-text"> Jsme český výrobce plakátů a rámů. Firma s nadšením pro to co dělá. Jak kanceláře, tak i dílnu máme v Písku na jihu Čech. </span></div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div id="pobo-share-widget">&nbsp;</div> </div> ]]>`;
