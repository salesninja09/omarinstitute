/* =====================================================================
   THE WORLD THROUGH TIME - ALL THE WORDS LIVE IN THIS FILE
   =====================================================================
   You can safely edit anything between "quote marks".
   Do NOT delete the commas, the quote marks, or the curly brackets.

   Each entry looks like this:

     "id"        a short label. Leave it alone.
     "side"      "t" = The Long Thread (gold, right).  "w" = The Wider World (silver, left).
     "sort"      the year, used to order the timeline and to pair entries side by side.
                 Negative numbers are BC. Deep-time entries use very large negatives.
     "yearLabel" the date shown on the card. Write it however you like.
     "ah"        the Islamic year, if there is one. Otherwise leave it out.
     "title"     the headline.
     "map"       which era map to draw. Must match a file in the maps folder,
                 e.g. "600" uses maps/map_600.js
     "zone"      which of the twelve ages this belongs to ("z0" to "z11").
     "pins"      the places in the story. Each one is:
                 [ "label", "name then, name now", latitude, longitude ]
     "story"     the main text.
     "meanwhile" the box showing what was happening on the other rail.
     "inv"       optional. A note about what was invented.
     "pop"       optional. Population note.
     "src"       the sources line at the bottom of the entry.

   After editing: save, commit on GitHub, and the live site updates itself
   in about twenty seconds. Nothing else to do.
   ===================================================================== */

window.DATA = {
 "meta": {
  "title": "The World Through Time",
  "subtitle": "A history of the world from the first humans to 1945, on two rails.",
  "endnote": "The timeline stops in 1945, with the United Nations founded, the European empires bankrupt, and the borders of the modern world drawn."
 },
 "rails": {
  "t": {
   "name": "The Long Thread",
   "blurb": "One continuous story, from the first humans through the prophets and the civilisations that grew from them."
  },
  "w": {
   "name": "The Wider World",
   "blurb": "Everyone else who was alive at the same moment: Egypt, China, Greece, Rome, Africa, the Americas and the Pacific."
  }
 },
 "zones": [
  {
   "id": "z0",
   "lo": -999999,
   "hi": -3500,
   "name": "Before the Calendars",
   "sub": "The world before writing. Sources give us the order of events, not the years, so this era carries no dates."
  },
  {
   "id": "z1",
   "lo": -3500,
   "hi": -2000,
   "name": "The First Cities",
   "sub": "Writing, the wheel, the plough. Sumer, Egypt and the Indus build the first cities on earth."
  },
  {
   "id": "z2",
   "lo": -2000,
   "hi": -1200,
   "name": "Chariots and Pharaohs",
   "sub": "Bronze, chariots and god-kings. The great powers of the ancient Near East trade, marry and fight."
  },
  {
   "id": "z3",
   "lo": -1200,
   "hi": -550,
   "name": "Iron, Kings and Prophets",
   "sub": "Iron replaces bronze. Assyria and Babylon build empires of terror, and prophets speak against them."
  },
  {
   "id": "z4",
   "lo": -550,
   "hi": 0,
   "name": "The Age of Thinkers",
   "sub": "In a few generations and on three continents, humanity produces Buddha, Confucius, the Greek philosophers and the first world empires."
  },
  {
   "id": "z5",
   "lo": 0,
   "hi": 570,
   "name": "Rome, Han and the Silk Road",
   "sub": "Two superpowers at either end of the world, joined by a road of silk. Then Rome falls in the west."
  },
  {
   "id": "z6",
   "lo": 570,
   "hi": 661,
   "name": "The Arabian Century",
   "sub": "A community forms in a corner of Arabia that neither great empire had bothered to conquer. Within thirty years it rules from Egypt to Persia."
  },
  {
   "id": "z7",
   "lo": 661,
   "hi": 1200,
   "name": "Caliphs, Vikings and the House of Wisdom",
   "sub": "Paper, algebra, hospitals and observatories in Baghdad and Cordoba. Vikings row east for silver. Song China invents printing."
  },
  {
   "id": "z8",
   "lo": 1200,
   "hi": 1450,
   "name": "Mongols and Plague",
   "sub": "The largest land empire in history, and then the deadliest disease. The century that broke the medieval world."
  },
  {
   "id": "z9",
   "lo": 1450,
   "hi": 1750,
   "name": "Gunpowder and Sails",
   "sub": "Cannon, caravels and printing presses. Three Muslim empires reach their height as Europe crosses the Atlantic."
  },
  {
   "id": "z10",
   "lo": 1750,
   "hi": 1914,
   "name": "Machines and Empires",
   "sub": "Steam, steel and colonies. The industrial gap opens, and most of the world is taken by the few countries that crossed it first."
  },
  {
   "id": "z11",
   "lo": 1914,
   "hi": 9999,
   "name": "The World at War",
   "sub": "Two wars thirty years apart kill more people than any event in history, end the caliphate and the European empires, and draw the map we live on."
  }
 ],
 "panels": {
  "z0": {
   "title": "Before the Calendars",
   "languages": "Nobody knows what the first people spoke, because speech leaves no trace. Writing has not been invented, so nothing from this age can be read. Everything we know comes from bones, tools, seeds and rubbish heaps.",
   "money": "There is no money anywhere on earth. People swap what they have for what they need. A sheep is worth what someone will give for it, and nothing is written down.",
   "society": "People live in small groups of a few dozen. Everyone knows everyone. Around 9000 BC some groups stop following animals and start planting seeds instead, which is the single biggest change in the way humans live that has ever happened. Once you farm, you stay put, you store grain, you can feed more children, and eventually someone has to guard the store.",
   "politics": "There are no kings and no states. Leadership means being respected, not being obeyed. A quarrel is settled by the family, or it is not settled at all.",
   "economy": "Food is the economy. Farming villages appear in the Fertile Crescent, along the Nile, in the Indus valley and in China at roughly the same time, and none of them knew the others existed.",
   "inventions": "Fire, stone blades, the bow, the needle, rope, the boat, pottery, the plough, the wheel, woven cloth, bread, beer, and the domestication of the dog. Almost every basic technology a human body needs was invented in this era by people whose names are gone.",
   "animals": "The dog is the oldest friend, tamed from wolves at least 15,000 years ago, long before farming. Then come the goat and the sheep, then cattle and the pig. The horse is still wild. Mammoths are dying out, and the last of them disappear from an Arctic island while Egypt is already building pyramids.",
   "moral": "Worst: we do not know, because nobody was writing. Graves show violence, and they also show that injured people were cared for long enough to heal, which means someone fed them. Fairest: a group small enough that no one can hoard without everyone noticing.",
   "wonders": "Gobekli Tepe in Turkey, a ring of carved stone pillars raised around 9500 BC by people who had not yet invented farming or pottery. It is older than Stonehenge by six thousand years, and nobody is sure why it was built."
  },
  "z1": {
   "title": "The First Cities (about 3500 to 2000 BC)",
   "languages": "Sumerian and then Akkadian in Iraq, Egyptian along the Nile, and an Indus script that nobody has ever managed to read. Writing begins as accounting. The first sentences humans wrote down were receipts for barley.",
   "money": "Still no coins. In Iraq, silver is weighed out, and a shekel starts life as a unit of weight rather than a coin. Barley works as small change. Most people simply barter.",
   "society": "Cities appear, and with them the first crowds of strangers. Temples own land and store grain. Slavery exists everywhere and nobody questions it. Kings claim that a god put them where they are, which makes disobeying the king a form of blasphemy.",
   "politics": "City-states first, each with its own god and wall, then the first kingdoms that swallow their neighbours. Egypt is unified under one crown around 3100 BC and stays that way, more or less, for three thousand years.",
   "economy": "Donkey caravans carry tin and cloth between Iraq and Turkey, and the merchants' letters survive on clay. Ships sail from the Indus to the Gulf. Trade is long-distance from almost the moment it exists.",
   "inventions": "Writing, about 3300 BC, which is where recorded history begins. The wheel, the plough, bronze, the sailing boat, the potter's wheel, irrigation canals, the arch, standardised weights, the twelve-month calendar and the sixty-minute hour, which we still use because the Sumerians counted in sixties.",
   "animals": "The donkey becomes the truck of the ancient world, carrying goods thousands of miles. Cattle pull ploughs. Cats move into Egyptian granaries to hunt mice and are eventually worshipped for it. The horse is domesticated on the steppe but is not yet used in war.",
   "moral": "Worst: slavery, debt bondage that could sell a man's children, and kings who claimed to be gods. Fairest: the first written law codes. Ur-Nammu's code, around 2100 BC, is the oldest law we still have, and it fines a man for injuring another rather than mutilating him in return, which was a real advance.",
   "wonders": "The Great Pyramid of Giza, built about 2560 BC, still the heaviest building ever raised, and the tallest thing humans made until a cathedral spire in 1311. The drains and street grids of Mohenjo-daro, which no European city would match for four thousand years."
  },
  "z2": {
   "title": "Chariots and Pharaohs (about 2000 to 1200 BC)",
   "languages": "Akkadian is the language of international diplomacy. Kings of Egypt, Turkey and Iraq write to one another in it, and their letters survive. Egyptian hieroglyphs, Hittite, and early Chinese on oracle bones. In the mines of Sinai, Semitic workers scratch out the first alphabet, and nearly every alphabet on earth today descends from it.",
   "money": "Still no coins. Egypt values goods against a copper weight called the deben. Wages are paid in bread, beer and grain. A tomb worker is paid in loaves.",
   "society": "Palace economies run on forced labour. The Children of Israel are enslaved in Egypt, which is the heart of the story of Moses. Scribes are a small, powerful class because reading is rare. Egyptian women can own property and go to court, which was unusual for the age.",
   "politics": "A club of great powers, Egypt, the Hittites, Babylon, Assyria and Mycenae, who exchange gifts, princesses and threats. Pharaoh is not merely a king but a god, and says so.",
   "economy": "Ships carry copper, tin and glass across the Mediterranean. One wreck found off Turkey held ten tons of copper. Chariots make war fast and expensive, and only rich states can afford them.",
   "inventions": "The chariot, the alphabet, glassmaking, the shaduf for lifting water, the composite bow, the water clock, and iron smelting, which begins in Turkey and will eventually make bronze obsolete.",
   "animals": "The horse changes war forever, harnessed to chariots rather than ridden. Camels are being domesticated in Arabia and will open the desert to trade. Egyptians keep cats, monkeys, geese and hunting dogs, and mummify them.",
   "moral": "Worst: state slavery, and a Pharaoh who ordered infant boys killed. Fairest: the Kadesh treaty of about 1274 BC between Egypt and the Hittites, the oldest surviving peace treaty in the world, which includes extradition and a promise of mutual defence. Also the tomb workers of Deir el-Medina, who in about 1157 BC downed tools over late wages and won. It is the first recorded strike in history.",
   "wonders": "Abu Simbel, carved into a cliff. The Exodus, remembered by three faiths ever since. And the alphabet, invented by labourers, not kings."
  },
  "z3": {
   "title": "Iron, Kings and Prophets (about 1200 to 550 BC)",
   "languages": "Hebrew and the other Canaanite tongues. Aramaic begins a thousand-year career as the common speech of the Near East. The Phoenicians carry their alphabet by ship, and the Greeks borrow it, add vowels, and hand it to Rome and eventually to us.",
   "money": "The first true coins are struck in Lydia, in western Turkey, around 600 BC. Before that, silver is weighed. Coinage spreads fast because it is honest: a stamped coin does not need a scale.",
   "society": "Tribes harden into kingdoms. Assyria deports whole populations to break their will, which is a policy, not an accident. Prophets appear who tell kings to their faces that they are wrong, which is one of the genuinely new things in this era.",
   "politics": "Assyria builds the first empire of provinces, standing armies and siege engineering. Babylon destroys it and inherits it. Then Persia destroys Babylon and builds something bigger and, for its time, gentler.",
   "economy": "Iron is cheap where bronze was not, so ordinary farmers get iron tools and ordinary soldiers get iron weapons. Phoenician ships trade the length of the Mediterranean and possibly around Africa.",
   "inventions": "Coinage. The Phoenician alphabet. Iron farm tools. Aqueducts and canals. Assyrian siege towers and battering rams. In Babylon, astronomers begin keeping records of the sky night after night, which is the beginning of astronomy as a science.",
   "animals": "Riding horses in war becomes normal, and cavalry replaces the chariot. The camel caravan opens the incense road from Yemen to Syria. Assyrian kings keep lions in parks so that they can hunt them, and carve the scene on their palace walls.",
   "moral": "Worst: Assyria's mass deportations and its habit of advertising its own cruelty in stone. Fairest: Cyrus of Persia, who let the exiled Judeans go home and rebuild, and who did not demand that conquered peoples worship his gods. His cylinder is often oversold as a charter of human rights, but the practice behind it was real.",
   "wonders": "The library of Ashurbanipal at Nineveh, which preserved the Epic of Gilgamesh and much else. The Hanging Gardens of Babylon, which may never have existed. The Temple in Jerusalem."
  },
  "z4": {
   "title": "The Age of Thinkers (about 550 BC to 1 CE)",
   "languages": "Aramaic across the Persian empire, then Greek across everything Alexander touched, from Egypt to Afghanistan. Latin is still a local Italian dialect. Sanskrit in India, classical Chinese in China.",
   "money": "Coins everywhere in the classical world: Persian, Greek, later Roman. Rome's silver denarius will circulate for four hundred years. Han China casts round coins with a square hole so they can be strung together.",
   "society": "Athens invents democracy and gives the vote to about one adult in five, since women, slaves and foreigners are excluded. Rome runs on slaves. India's caste order hardens. And yet this is the age when people first argue, in public and in writing, about how a person ought to live.",
   "politics": "Persia builds the first empire to span three continents. Alexander destroys it in thirteen years. His generals carve it up. Rome eats the Mediterranean. China is unified by force in 221 BC and stays a single idea ever after.",
   "economy": "The Silk Road opens. Chinese silk reaches Rome, Roman glass reaches China, and neither empire is entirely sure the other is real. Sailors learn the monsoon and cross open sea to India.",
   "inventions": "Paper in China. The crossbow. The water wheel. The screw and the lever explained by Archimedes. Euclid's geometry, still taught. The Antikythera mechanism, a Greek bronze gear machine that predicts eclipses, which nobody would match in complexity for over a thousand years.",
   "animals": "The elephant goes to war. Hannibal takes them over the Alps, and Indian kings field them by the hundred. Rome imports lions, bears and giraffes to kill in front of crowds, a trade that empties whole regions of large animals.",
   "moral": "Worst: Rome's arenas, where killing was entertainment, and a slave economy so large that in parts of Italy perhaps a third of people were owned. Leaving unwanted babies outside to die was legal and common. Fairest: Ashoka of India, who after a war that killed a hundred thousand people renounced conquest, carved his regret onto rocks across the subcontinent, and built hospitals and wells. No other ancient ruler ever apologised in public.",
   "wonders": "The Library of Alexandria. The Great Wall begun. The Terracotta Army, eight thousand soldiers buried to guard one man's tomb."
  },
  "z5": {
   "title": "Rome, Han and the Silk Road (1 to 570 CE)",
   "languages": "Aramaic in Palestine, which is the language Jesus spoke. Greek across the eastern Mediterranean, Latin in the west. Sanskrit in India. Chinese in Han China. Nobody speaks a language that could be called English, French or Arabic in the modern sense.",
   "money": "The Roman denarius and the gold aureus. Money changers work in the courtyard of the Temple in Jerusalem, which is why the Gospels mention them. Rome debases its coinage steadily, and prices rise.",
   "society": "Two superpowers, Rome and Han China, hold perhaps half the human race between them. Both run on peasants and taxes. Rome crucifies rebels in public as a warning. Into this world comes a preacher in Galilee who spends his time with lepers, beggars and outcasts, which is the whole point.",
   "politics": "Rome becomes an empire, then splits, then falls in the west in 476 while the eastern half carries on from Constantinople for another thousand years. Persia and Rome fight each other for centuries and exhaust each other completely.",
   "economy": "The Silk Road at its first peak. Ships ride the monsoon between Egypt and India. Plague arrives with the trade, and the plague of Justinian in 541 kills tens of millions and hollows out both empires.",
   "inventions": "Roman concrete, which set underwater and is still standing. Aqueducts, sewers and roads. The codex, a book with pages, which replaces the scroll. In India, the number zero and the decimal system, which is arguably the most useful invention on this entire timeline. Paper spreads across China.",
   "animals": "Camels take over the Silk Road, because a camel can carry more than a cart and needs no road. Rome's appetite for arena animals wipes out lions in North Africa and elephants in Syria.",
   "moral": "Worst: crucifixion as public policy, the arena, and slavery on an industrial scale. Fairest: Han China's civil service exams, which meant that in theory a farmer's clever son could run a province. India's zero was a gift to everyone. And in the Roman world, the new faith's insistence that a slave and a senator had the same soul was, whatever came later, a genuinely radical idea.",
   "wonders": "The Pantheon's dome, unreinforced concrete, still the largest of its kind after nineteen centuries. Nalanda university in India. The Hagia Sophia in Constantinople, finished in 537."
  },
  "z6": {
   "title": "The Arabian Century (570 to 661)",
   "languages": "Arabic, which is about to become one of the great world languages. Greek in Constantinople, Persian in Ctesiphon, Syriac among eastern Christians, Coptic in Egypt, Latin decaying into the languages that will become Italian, French and Spanish.",
   "money": "Byzantine gold and Persian silver coins circulate in Mecca, and traders there handle both. Arabia mints nothing of its own yet. Within seventy years, an Arab coinage will replace both.",
   "society": "Arabia before this century has no state, no police and no courts. Justice means your tribe avenging you. Baby girls are sometimes buried alive, a practice the Quran attacks directly and abolishes. Slavery is normal, and freeing a slave becomes an act of religious merit. In Madinah, a written agreement binds Muslims and Jewish tribes into a single community for defence, which is a remarkable document for its time.",
   "politics": "Two exhausted empires, Byzantium and Persia, have just finished a twenty-six year war that ruined them both. Between them, in territory neither bothered to hold, a new kind of community forms around a book. Within thirty years of the Prophet's death it governs Egypt, Syria and Persia.",
   "economy": "Mecca lives on caravans, two a year, north to Syria and south to Yemen. Madinah lives on dates and grain. Honest weights and measures are a religious duty, and hoarding to drive up prices is forbidden.",
   "inventions": "Not a century of machines but of institutions. A written constitution for a mixed community. A compulsory welfare tax on wealth, which is one of the earliest systematic poor-relief schemes anywhere. A calendar that starts from a migration rather than a king's birthday.",
   "animals": "The camel is everything: transport, milk, meat, wealth and status. The horse is prized for war. The Quran names the bee, the ant, the spider and the elephant in chapters that carry their names, and forbids cruelty to animals, which was not a common position at the time.",
   "moral": "Worst: the two empires bleeding each other white while their peasants starved, and Arabia's feuds and infanticide. Fairest: the farewell sermon of 632, which abolished blood feuds and the charging of interest, insisted on the rights of women, and declared that no Arab is better than a non-Arab and no white man better than a black man except in decency. Set against the seventh century, that is an extraordinary sentence.",
   "wonders": "The Quran itself, memorised and written down within a generation, and unchanged since. The Dome of the Rock will follow in 691."
  },
  "z7": {
   "title": "Caliphs, Vikings and the House of Wisdom (661 to 1200)",
   "languages": "Arabic becomes the language of science and law from Spain to India, in the way English is today. Persian is reborn as a literary language. Latin survives in European churches. Swahili begins on the East African coast as a trading speech.",
   "money": "The gold dinar and the silver dirham are the trusted money of the world, and archaeologists dig them out of Viking graves in Sweden. A merchant can deposit money in Baghdad and draw it in Cordoba using a written note called a sakk, which is where the English word cheque comes from.",
   "society": "Baghdad and Cordoba are cities of Arabs, Persians, Turks, Jews and Christians, where a scholar can make a living. Charitable endowments pay for hospitals, schools and drinking fountains. Slavery continues, and the enslaved African labourers of southern Iraq revolted for fourteen years, which is a stain this site does not hide.",
   "politics": "One religion, many states. There is a caliph in Baghdad, a rival in Cairo and another in Cordoba, and yet a single body of law and a single pilgrimage hold the whole thing together. In Europe, kings are weak and land is everything.",
   "economy": "Rice, sugar, cotton, citrus and hard wheat spread west across the Muslim world along with the irrigation manuals to grow them. Ships sail directly from Basra to China. Vikings row down the Volga to sell furs and slaves for Baghdad's silver.",
   "inventions": "This is the great age of Muslim science and it deserves naming properly. Al-Khwarizmi writes the book that gives us the word algebra, and his own name, Latinised, gives us the word algorithm. Ibn al-Haytham works out how vision actually happens and insists that a claim must be tested by experiment, which makes him a founder of the scientific method. Al-Zahrawi writes the surgical textbook Europe will use for five hundred years and invents instruments still recognisable today. Ibn Sina's Canon of Medicine is taught in European universities into the 1600s. Al-Biruni measures the radius of the earth from a mountain in Pakistan and gets it right to within one per cent. The astrolabe is perfected into a pocket computer for the stars. Paper arrives from China in 751 and mills open in Baghdad, which makes books cheap and everything else possible. Meanwhile in China: printing with movable type, the compass, gunpowder and paper money.",
   "animals": "The camel caravan and the dhow carry the world's trade. Arab horses become the most valued breed on earth. Pigeons carry post between Baghdad and Cairo, a working messenger service. Baghdad's caliph sends an elephant as a gift to Charlemagne, and it walks to Germany.",
   "moral": "Worst: the plantation slavery of the Zanj in the marshes of Iraq, and the violence of succession disputes. Fairest: Umar II, who ruled for two and a half years around 718 and is remembered because his tax collectors in some districts could not find anyone poor enough to need the welfare payment. Free hospitals treated anyone who came. Non-Muslims paid a tax and were second-class in law by our standards, but they had enforceable rights to their lives, property and worship at a time when Europe offered its minorities far less.",
   "wonders": "The House of Wisdom in Baghdad. Hospitals with wards, case notes and licensing exams for doctors. Cordoba with street lighting and paved roads while Paris was mud."
  },
  "z8": {
   "title": "Mongols and Plague (1200 to 1450)",
   "languages": "Persian becomes the courtly language from Turkey to India. Arabic keeps law and scripture. Mongol orders travel by relay post across a continent. Middle English is taking shape, and Chaucer will soon write in it.",
   "money": "Silver coins are debased by war. The Mongols try paper money in Iran in 1294 and the market collapses within days, which is the first hyperinflation in the region's history. Mali's gold funds half the Mediterranean.",
   "society": "A strange ladder exists in Egypt, where boys bought as slaves are trained as soldiers, freed, and can rise to rule the country. Mongol law demands religious tolerance while Mongol armies destroy cities completely. Both things are true at once.",
   "politics": "Genghis Khan and his grandsons build the largest land empire there has ever been, from Korea to Hungary. They sack Baghdad in 1258 and end five hundred years of the caliphate there. Then, within two generations, the western Mongols become Muslims themselves.",
   "economy": "The Mongol peace reopens the Silk Road end to end, and Marco Polo and Ibn Battuta both walk it. The same roads carry the plague west in 1347.",
   "inventions": "Gunpowder weapons reach the Middle East and Europe and change war permanently. The mechanical clock appears in Europe. Spectacles are invented in Italy. The Maragha observatory in Iran, built for a Mongol conqueror, produces planetary models that turn up two centuries later in Copernicus's work, which is one of the strangest transmissions in the history of science.",
   "animals": "The Mongol pony wins the world. It is small, tough, needs no grain, and a Mongol rider keeps several so he can change mounts and ride all day. The rat and its fleas carry the plague along the same roads the horses opened.",
   "moral": "Worst: the Mongol massacres. Contemporary writers describe cities of hundreds of thousands emptied in days, and modern historians think they exaggerated but not wildly. The sack of Baghdad destroyed libraries that can never be replaced. Fairest: Mongol religious tolerance was real and written into law, and the endowed hospitals and soup kitchens of Mamluk Cairo took in refugees from a wrecked world.",
   "wonders": "Rumi writing poetry in Konya while refugees stream past his door. Ibn Battuta travelling seventy-five thousand miles and coming home to write it down. Timbuktu's libraries."
  },
  "z9": {
   "title": "Gunpowder and Sails (1450 to 1750)",
   "languages": "Ottoman Turkish joins Arabic and Persian as a language of high culture. Printing fixes European languages in place. Spanish and Portuguese go to sea. Urdu is born in the markets around the Mughal army camp, which is what the word means.",
   "money": "Silver from the mines of Bolivia and Mexico floods the world. The Spanish piece of eight becomes the first global currency, minted in America, spent in Manila, hoarded in China. So much silver arrives that prices rise everywhere, and the Ottoman treasury is badly hurt by inflation it did not cause and could not control.",
   "society": "The Ottomans let each religious community run its own courts and schools, at the same time as Spain expels its Jews and Muslims. When the Sephardic Jews are expelled in 1492, the Ottoman sultan sends ships to collect them. Set against that, the Ottoman practice of taking Christian boys as a tax and training them for the army and the palace was a real coercion, even though some of them rose to run the empire.",
   "politics": "Gunpowder favours big states, so big states get bigger. The Ottomans, the Safavids in Iran and the Mughals in India rule perhaps a third of the human race between them. Europe tears itself apart over religion, and the Thirty Years War kills a third of Germany.",
   "economy": "Mughal India is the workshop of the world and produces roughly a quarter of everything made on earth. Portugal sails round Africa and forces its way into an Indian Ocean trade that had been open for centuries. The Atlantic slave trade begins, and the Americas lose up to nine in ten of their people to disease within a century.",
   "inventions": "The printing press, about 1450, which does more to change Europe than any battle. The caravel and accurate navigation. The telescope in 1609. Newton's laws in 1687. In Istanbul, Taqi al-Din built a first-class observatory in 1577, and it was demolished three years later under political pressure, which is a painful moment to set beside Galileo.",
   "animals": "The horse reaches America with the Spanish and transforms the plains nations, who become superb riders within a generation on an animal their grandparents had never seen. Cattle, pigs and sheep go west; the turkey, the guinea pig and the llama become known in Europe. The dodo is discovered and wiped out within a lifetime.",
   "moral": "Worst: the Atlantic slave trade, which shipped roughly twelve million people in chains and killed nearly two million at sea, and the collapse of the American population, which is the largest death toll in this entire timeline. Fairest: Akbar in India, who abolished the tax on non-Muslims, appointed Hindu generals and ministers, and hosted debates between faiths in his own palace.",
   "wonders": "The Taj Mahal. Sinan's mosques. Isfahan, of which people said it was half the world. And coffee, which comes out of Yemen and gives the world the coffee house, where strangers argue about politics."
  },
  "z10": {
   "title": "Machines and Empires (1750 to 1914)",
   "languages": "English and French become the administrative languages of half the planet, not because they are better but because of who is holding the guns. Arabic printing finally industrialises in Cairo in 1822. Urdu matures into a great literary language.",
   "money": "The pound sterling and the gold standard. The Maria Theresa thaler, an Austrian silver coin, is the trusted money of Arabia and East Africa well into the twentieth century, which is where the word dollar ultimately comes from.",
   "society": "Britain bans the slave trade in 1807 and slavery in 1833, while simultaneously expanding an empire built on forced labour and famine, which is the central contradiction of the age. The Ottoman reforms of 1839 declare all subjects equal before the law regardless of religion, which on paper is the most sweeping such statement any large state had made.",
   "politics": "Nearly the whole Muslim world falls under European rule or supervision within a century. In 1884 the powers of Europe meet in Berlin and draw Africa's borders with rulers, without a single African present. Those lines are still there.",
   "economy": "Steam, coal and factories open a gap between a handful of countries and everyone else. Britain out-produces India and China while actively destroying their textile industries. The Suez Canal opens in 1869 and makes Egypt the hinge of the world, and its debts the excuse to occupy it.",
   "inventions": "The steam engine, the railway, the telegraph, photography, vaccination, anaesthesia, the germ theory of disease, electricity, the telephone, the internal combustion engine, and in 1903 the aeroplane. More changed in these hundred and fifty years than in the previous five thousand.",
   "animals": "The horse reaches its peak and then vanishes from the roads within a generation of the motor car. Whales are hunted almost to extinction for lamp oil. The passenger pigeon, once the most numerous bird on earth, is shot to nothing, and the last one dies in a zoo in 1914.",
   "moral": "Worst: the Congo, where millions died to supply rubber to a Belgian king. The Indian famines of 1876 and 1896, in which millions starved while grain was exported, because the government believed markets should not be interfered with. Fairest: the abolitionists, who won. The first Geneva Convention in 1864. And the constitutional movements in Iran in 1906 and the Ottoman empire in 1908, which put parliaments inside Muslim empires.",
   "wonders": "The railway, which made distance mean something different. Anaesthesia, which meant surgery without agony. And the Hijaz Railway of 1908, which carried pilgrims to Madinah by steam."
  },
  "z11": {
   "title": "The World at War (1914 to 1945)",
   "languages": "Turkey switches from Arabic to Latin script in 1928, which cuts a generation off from its own libraries in a single stroke. English becomes the world's second language. Modern Standard Arabic unites a readership across the new borders.",
   "money": "The gold standard dies in the Depression. At Bretton Woods in 1944 the American dollar becomes the anchor of world money, which is still roughly true today.",
   "society": "Mass politics, mass propaganda and mass death. Radio reaches every home and is used to lie to it. Women enter parliaments and factories across dozens of countries. Anti-colonial movements learn to use the language of rights against the empires that invented it.",
   "politics": "The caliphate is abolished in 1924 after nearly thirteen centuries. The Middle East is carved into mandates. Then a second war kills between seventy and eighty-five million people, leaves Europe's empires bankrupt, and hands the world to two superpowers.",
   "economy": "The Depression discredits the idea that markets fix themselves. Oil is struck in Bahrain in 1932, in Saudi Arabia in 1938 and in Kuwait in 1938, and the economic centre of gravity begins to move back towards the region where this timeline started.",
   "inventions": "Penicillin, which has saved more lives than any other single discovery. Radar, the jet engine, the first computers, and the atomic bomb. The same thirty years produced the thing that cures infection and the thing that destroys cities.",
   "animals": "Eight million horses die in the First World War. Dogs, pigeons and mules serve in both. And in 1936 the last thylacine dies in a Tasmanian zoo, filmed, which is one of the few extinctions we can actually watch.",
   "moral": "Worst: the Holocaust. Six million Jews were murdered in an industrial system built for the purpose, and it is the moral floor of this entire timeline. Alongside it: the Second World War's tens of millions of dead, the Bengal famine of 1943, and the Armenian deportations and massacres of 1915. Fairest, and only just emerging: the United Nations Charter of 1945, and the Universal Declaration of Human Rights that follows in 1948, drafted with Lebanese, Egyptian and Chinese voices in the room and not only European ones.",
   "wonders": "Penicillin. The computer. And the bomb, which is where this timeline stops, because after 1945 humanity is the first species that can end itself."
  }
 },
 "milestones": [
  {
   "id": "1",
   "num": "1",
   "side": "t",
   "sort": -100000,
   "dated": false,
   "yearLabel": "Undated. The beginning.",
   "ah": null,
   "title": "Adam and Eve",
   "map": "bc3000",
   "pins": [
    [
     "The first House of worship",
     "Bakkah, now Makkah, Saudi Arabia",
     21.42,
     39.83
    ],
    [
     "Where they met again, by tradition",
     "Arafat, outside Makkah",
     21.35,
     39.98
    ]
   ],
   "story": "God created the first man, taught him the names of all things, and told the angels to bow to him. One refused out of pride, and that refusal begins the long argument that runs through the rest of this timeline. Adam and Eve lived in the Garden, were tricked, ate what they had been told not to eat, admitted they were wrong, and were sent down to earth to begin ordinary human life. They were given a promise on the way out: guidance would come, and whoever followed it would have nothing to fear. Their two sons quarrelled, and one killed the other. That was the first murder, and it happened in the first family.",
   "meanwhile": "Nothing, because this is where the human story starts. The map shows an earth without borders, because there were none.",
   "pop": "The first human beings.",
   "src": "Quran 2:30-39, 7:11-25, 20:115-123, 5:27-31, 3:96. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 1.",
   "inv": null,
   "zone": "z0"
  },
  {
   "id": "2",
   "num": "2",
   "side": "t",
   "sort": -99000,
   "dated": false,
   "yearLabel": "Undated. Before Noah.",
   "ah": null,
   "title": "Enoch (Idris)",
   "map": "bc3000",
   "pins": [
    [
     "Babylon, by report",
     "Babil, now Hillah, Iraq",
     32.54,
     44.42
    ],
    [
     "Egypt, by report",
     "Memphis, now Mit Rahina",
     29.85,
     31.25
    ]
   ],
   "story": "The Quran calls him a man of truth and says God raised him to a high place. Later tradition remembers him as the first person to write with a pen, the first to sew clothes rather than wear skins, and the first to study the movement of the stars. Whether or not those details are certain, the picture they paint is worth pausing on: the first scholar in the human story.",
   "meanwhile": "Farming villages are spreading along the Nile, in Iraq, in the Indus valley and in China. None of them know the others exist. Writing has not been invented yet.",
   "pop": "Perhaps five to ten million people alive, though nobody can be sure.",
   "src": "Quran 19:56-57, 21:85. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z0"
  },
  {
   "id": "3",
   "num": "3",
   "side": "t",
   "sort": -98000,
   "dated": false,
   "yearLabel": "Undated. He called his people for 950 years.",
   "ah": null,
   "title": "Noah (Nuh) and the Flood",
   "map": "bc3000",
   "pins": [
    [
     "His people lived here",
     "Southern Iraq",
     31.0,
     45.5
    ],
    [
     "The Ark came to rest on Mount Judi",
     "Cudi Dagi, southeast Turkey",
     37.37,
     42.34
    ]
   ],
   "story": "Idol worship begins here, and the Quran explains how. Five righteous men died, their community honoured their memory, and within a few generations people were praying to the statues. Noah spent his life arguing against it. Almost nobody listened. He was told to build a ship on dry land, which must have looked absurd, and the flood came. His own son refused to board and drowned. Everyone alive afterwards descended from those who did board. The Quran names the mountain where the ship came to rest as Judi, in what is now Turkey, not Ararat.",
   "meanwhile": "Clay tablets from Iraq preserve their own memory of a great flood, in the Sumerian story and later in the Epic of Gilgamesh. Cultures that never met each other tell a version of this.",
   "pop": null,
   "src": "Quran 71, 11:25-49, 29:14, 37:75-82. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 1.",
   "inv": null,
   "zone": "z0"
  },
  {
   "id": "4",
   "num": "4",
   "side": "t",
   "sort": -97000,
   "dated": false,
   "yearLabel": "Undated. After Noah.",
   "ah": null,
   "title": "Hud and the people of Aad",
   "map": "bc3000",
   "pins": [
    [
     "The sand dunes of al-Ahqaf",
     "Hadhramaut and the Empty Quarter, Yemen and Oman",
     17.5,
     51.0
    ],
    [
     "Iram of the pillars, possibly this site",
     "Shisr, Oman",
     18.25,
     53.65
    ]
   ],
   "story": "The people of Aad were builders. The Quran says nothing like them had been made in the land, and that they put a monument on every hill because they could. They were physically powerful and they knew it, and they told Hud that nobody was stronger than they were. A wind came and blew for seven nights and eight days, and that was the end of them. The lesson is not subtle and it is not meant to be.",
   "meanwhile": "Southern Arabia will later become the incense road, carrying frankincense north to Egypt and the Mediterranean. The caravan trade is beginning to form here.",
   "pop": null,
   "src": "Quran 7:65-72, 46:21-26, 69:6-8, 89:6-8. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z0"
  },
  {
   "id": "5",
   "num": "5",
   "side": "t",
   "sort": -96000,
   "dated": false,
   "yearLabel": "Undated. After the people of Aad.",
   "ah": null,
   "title": "Salih and the Thamud",
   "map": "bc3000",
   "pins": [
    [
     "Al-Hijr, homes cut into rock",
     "Hegra, AlUla, Saudi Arabia",
     26.79,
     37.95
    ]
   ],
   "story": "The Thamud carved their houses out of solid cliffs, and you can still go and look at the results. They asked Salih for a miracle and got one: a she-camel, with a right to drink from the well on set days. It was a small thing to ask, sharing water with an animal, and they would not do it. They cut her legs from under her. Three days later they were destroyed. Centuries afterwards the Prophet Muhammad passed through this valley on campaign and told his men to hurry through it and not to linger.",
   "meanwhile": "This corner of Arabia sits on the trade route between Yemen and Syria. The spectacular tombs tourists photograph at Hegra today were cut by the later Nabataeans, on top of the older Thamud site.",
   "pop": null,
   "src": "Quran 7:73-79, 11:61-68, 91:11-15. Ibn Kathir, Stories of the Prophets. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z0"
  },
  {
   "id": "6",
   "num": "6",
   "side": "t",
   "sort": -2000,
   "dated": true,
   "yearLabel": "About 2000 to 1800 BC",
   "ah": null,
   "title": "Abraham (Ibrahim)",
   "map": "bc2000",
   "pins": [
    [
     "Ur, his birthplace by tradition",
     "Tell el-Muqayyar, Iraq",
     30.96,
     46.1
    ],
    [
     "Babylon, where he faced the king",
     "Hillah, Iraq",
     32.54,
     44.42
    ],
    [
     "Harran, on the road north",
     "Harran, Turkey",
     36.87,
     39.03
    ],
    [
     "Hebron, where he settled. The city is named after him.",
     "Al-Khalil, Palestine",
     31.53,
     35.1
    ],
    [
     "Makkah, where he and Ishmael built the Kaaba",
     "Makkah, Saudi Arabia",
     21.42,
     39.83
    ],
    [
     "Sodom, where Lot was sent",
     "Dead Sea region",
     31.5,
     35.5
    ]
   ],
   "story": "He grew up in a house that made idols and sold them. He looked at a star, then the moon, then the sun, and reasoned that a thing which sets cannot be God. Then he took an axe to his father's stock. The king had him thrown into a fire and he walked out of it. He argued with that king about who really gives life and death, and won the argument. Then he left, and kept leaving: Iraq, Turkey, Palestine, Egypt, Arabia. He was told to sacrifice his son and was ready to do it, and God stopped him and provided a ram instead. He and his son Ishmael built the Kaaba at Makkah and called people to visit it. Jews, Christians and Muslims all trace themselves back to this one man. Dated history on this timeline begins with him.",
   "meanwhile": "Egypt is in its Middle Kingdom, and the pyramids are already five hundred years old. Babylon is rising and Hammurabi will soon write his law code. The cities of the Indus valley are at their height, with drains better than anything Europe would have for millennia. Stonehenge is standing.",
   "pop": "About 27 million people alive. Egypt holds a million or so.",
   "src": "Quran 6:74-83, 21:51-70, 2:124-132, 2:258, 37:99-113, 14:35-41. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 2. McEvedy and Jones.",
   "inv": null,
   "zone": "z2"
  },
  {
   "id": "7",
   "num": "7",
   "side": "t",
   "sort": -1900,
   "dated": true,
   "yearLabel": "About 1900 to 1700 BC",
   "ah": null,
   "title": "Ishmael and Isaac",
   "map": "bc2000",
   "pins": [
    [
     "Makkah, where Hagar ran and the spring appeared",
     "Makkah, Saudi Arabia",
     21.42,
     39.83
    ],
    [
     "Canaan, where Isaac lived",
     "Hebron and Beersheba",
     31.5,
     35.0
    ]
   ],
   "story": "Abraham left his wife Hagar and their baby son in an empty valley with almost no water, because he had been told to. She ran between two hills looking for help, seven times, and a spring came up at the child's feet. A passing tribe asked to settle by the water, and that is how Makkah began, as a well with people around it. Every pilgrim since has walked those same two hills. Ishmael grew up to help his father build the Kaaba, and the Arabs of the north descend from him, which is the line that eventually reaches Muhammad. Isaac, born to Abraham in old age, carried the line that produced the prophets of Israel.",
   "meanwhile": "Hammurabi is about to publish his law code in Babylon. Egypt is drifting towards a period of foreign rule in the Delta. The Indus cities are beginning their slow, unexplained decline.",
   "pop": "About 27 to 35 million people alive.",
   "src": "Quran 2:125-129, 37:100-113, 19:54-55. Sahih al-Bukhari records the story of the spring. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z2"
  },
  {
   "id": "8",
   "num": "8",
   "side": "t",
   "sort": -1750,
   "dated": true,
   "yearLabel": "About 1800 to 1600 BC",
   "ah": null,
   "title": "Joseph (Yusuf) in Egypt",
   "map": "bc1500",
   "pins": [
    [
     "Canaan, where the family lived",
     "Palestine",
     31.0,
     34.8
    ],
    [
     "Egypt, where Joseph rose to power",
     "Memphis and the eastern Delta",
     29.85,
     31.25
    ]
   ],
   "story": "The Quran calls this the best of stories and gives it a whole chapter, told straight through from beginning to end, which it does for no other narrative. A boy dreams that the sun and moon bow to him. His brothers, sick of him, throw him down a well and tell their father he was eaten by a wolf. He is sold into slavery in Egypt, resists his master's wife, is imprisoned for a crime he did not commit, and interprets dreams in his cell. Years later he interprets the king's dream of seven fat cows and seven thin ones, warns of famine, and is put in charge of the grain stores. When his brothers arrive begging for food and do not recognise him, he could have destroyed them. He forgives them instead. That is how the Children of Israel came to live in Egypt, which sets up everything that happens next.",
   "meanwhile": "Egypt at this time is partly ruled by foreign kings in the Delta, which fits a story in which an outsider can rise to run the treasury. Minoan Crete is trading across the Mediterranean. In China, the first writing is about to appear.",
   "pop": "About 30 to 40 million people alive. Egypt holds around two million.",
   "src": "Quran, chapter 12 entire. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 2.",
   "inv": null,
   "zone": "z2"
  },
  {
   "id": "9",
   "num": "9",
   "side": "t",
   "sort": -1500,
   "dated": true,
   "yearLabel": "Between Joseph and Moses",
   "ah": null,
   "title": "Job, Dhul-Kifl, and Jethro",
   "map": "bc1500",
   "pins": [
    [
     "Job's land, by report",
     "Hauran, southern Syria",
     32.5,
     36.5
    ],
    [
     "A shrine to Dhul-Kifl",
     "Al-Kifl, Iraq",
     32.23,
     44.37
    ],
    [
     "Midian, where Jethro taught",
     "Al-Bad, northwest Saudi Arabia",
     28.5,
     35.0
    ]
   ],
   "story": "Job lost his wealth, his children and his health, one after another, and did not curse God. The Quran says simply that God found him patient, and calls him an excellent servant. Jethro was sent to Midian, a town of traders who cheated with their scales and robbed people on the roads. His message put honest business and honest worship in the same sentence, which is not how most people think about religion. Give full measure, he told them, and do not short-change people of what is theirs. Fair weights turn out to be a religious duty, and this idea comes back with full force in Makkah two thousand years later.",
   "meanwhile": "Trade across the Bronze Age Mediterranean is at its peak. Midian sits on the copper and incense routes, which is precisely why weights and measures were the moral battleground there and not somewhere else.",
   "pop": "About 40 million people alive.",
   "src": "Quran 38:41-44, 21:83-85, 7:85-93, 11:84-95. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z2"
  },
  {
   "id": "10",
   "num": "10",
   "side": "t",
   "sort": -1250,
   "dated": true,
   "yearLabel": "About the 13th century BC",
   "ah": null,
   "title": "Moses (Musa) and Pharaoh",
   "map": "bc1500",
   "pins": [
    [
     "Born under a death sentence",
     "Eastern Nile Delta, Egypt",
     30.8,
     31.8
    ],
    [
     "Ten years in Midian",
     "Al-Bad, northwest Arabia",
     28.5,
     35.0
    ],
    [
     "The burning bush, and later the Law",
     "Mount Sinai",
     28.54,
     33.98
    ],
    [
     "The sea crossing",
     "Gulf of Suez",
     29.5,
     32.6
    ]
   ],
   "story": "Pharaoh ordered the baby boys of an enslaved people killed. One mother put her son in a basket on the river, and Pharaoh's own household pulled him out and raised him in the palace. He grew up, killed a man in a fight, fled, and spent ten years as a shepherd. Then a voice spoke to him from a burning bush and sent him back to the most powerful man on earth with a demand: let these people go. Pharaoh's magicians were beaten at their own trade and believed on the spot. The plagues came. The people left, the sea opened, and the army that chased them drowned. The Quran says Pharaoh's body was preserved as a sign for those who came after, which is an interesting line to read in a museum full of mummies. Moses is mentioned more often in the Quran than any other prophet. The Quran never names the Pharaoh, and historians still argue about who he was.",
   "meanwhile": "Egypt is at the height of its imperial power. The Hittites of Turkey have just signed the world's first surviving peace treaty with Egypt after fighting to a draw. Mycenaean Greece is thriving. Within a few decades the entire eastern Mediterranean system will collapse.",
   "pop": "About 40 to 50 million people alive. Egypt holds two to three million.",
   "src": "Quran 20:9-98, 28:3-46, 26:10-68, 10:75-92, 18:60-82. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 3.",
   "inv": null,
   "zone": "z2"
  },
  {
   "id": "11",
   "num": "11",
   "side": "t",
   "sort": -1000,
   "dated": true,
   "yearLabel": "About 1000 to 930 BC",
   "ah": null,
   "title": "David and Solomon",
   "map": "bc1000",
   "pins": [
    [
     "Jerusalem, the capital and the Temple",
     "Al-Quds, Jerusalem",
     31.78,
     35.23
    ],
    [
     "Sheba, the queen's kingdom",
     "Marib, Yemen",
     15.42,
     45.34
    ]
   ],
   "story": "A shepherd boy killed a giant with a sling and became a king. Iron went soft in David's hands, the mountains and the birds echoed his singing, and he was given the Psalms. His son Solomon inherited something no one has had before or since: the wind at his command, unseen beings working for him, and the ability to understand what birds and ants were saying. A hoopoe brought him news of a queen in Yemen who worshipped the sun. He sent a letter. She came, saw, and chose to worship God instead. Solomon built the Temple in Jerusalem. After he died the kingdom split in two and never recovered.",
   "meanwhile": "Egypt is weak. Assyria is quietly rebuilding into the monster it will become. In China the Zhou dynasty has introduced the idea that a ruler can lose the right to rule by behaving badly, which is the same idea the prophets are pressing in the west. The Phoenicians of Lebanon are spreading the alphabet by ship.",
   "pop": "About 50 million people alive.",
   "src": "Quran 2:246-251, 21:78-82, 27:15-44, 34:10-16, 38:17-40. Ibn Kathir, Stories of the Prophets. Al-Tabari, volume 3.",
   "inv": null,
   "zone": "z3"
  },
  {
   "id": "12",
   "num": "12",
   "side": "t",
   "sort": -800,
   "dated": true,
   "yearLabel": "About the 9th to 8th century BC",
   "ah": null,
   "title": "Elijah, Elisha and Jonah",
   "map": "bc700",
   "pins": [
    [
     "Elijah preached against Baal here",
     "Northern Israel and the Bekaa",
     34.0,
     36.2
    ],
    [
     "Jonah was sent to Nineveh",
     "Mosul, Iraq",
     36.36,
     43.15
    ]
   ],
   "story": "Jonah was sent to Nineveh, the capital of the Assyrian empire and quite possibly the largest city on earth, and the Quran describes it as a city of a hundred thousand people or more. He gave up on them and left before he had permission to leave. A storm hit the ship, the crew drew lots to see who was bringing the bad luck, and he went over the side. A huge fish swallowed him. In the dark he said the sentence he is remembered for, admitting he was the one in the wrong. He was returned to the city, and Nineveh listened. It is the only city in the Quran that repents as a whole and is spared. Elijah, in the same era, spent his life arguing against the worship of Baal in a kingdom that had adopted it.",
   "meanwhile": "Assyria is the superpower of the age and Nineveh is its heart, so Jonah was sent to the capital of the empire everyone else was terrified of. Rome is founded, by tradition, in 753 BC. The first Olympic games are held in Greece. Homer's poems are taking shape.",
   "pop": "Between 60 and 80 million people alive. Nineveh's size in the Quran matches what archaeologists estimate.",
   "src": "Quran 37:123-148, 21:87-88, 10:98, 68:48-50. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z3"
  },
  {
   "id": "12b",
   "num": "12b",
   "side": "t",
   "sort": -700,
   "dated": false,
   "yearLabel": "Undated",
   "ah": null,
   "title": "Dhul-Qarnayn and Luqman",
   "map": "bc500",
   "pins": [
    [
     "The barrier he built. The place is not named and is debated.",
     "Traditionally a pass in the Caucasus",
     42.5,
     44.5
    ]
   ],
   "story": "Dhul-Qarnayn was a king who was given real power over the earth and used it well. He travelled to the far west and the far east, judged people fairly, and built a wall to protect a defenceless community from raiders. When they offered to pay him he refused the money and said the ability to do it was a gift from God, not a service to be billed. The Quran deliberately does not name him. Classical scholars often said he was Alexander the Great. Many later scholars argue he was Cyrus of Persia, who fits the description of a just conqueror rather better. The honest answer is that we do not know, and the site shows you both candidates on the other rail. Luqman was not a prophet but a wise man, and the Quran preserves the advice he gave his son: be grateful, pray, be modest, and do not walk around as though you own the place.",
   "meanwhile": "Look across the rail at Cyrus of Persia, and then at Alexander. Both have been proposed as the man in this story, and both are on this timeline.",
   "pop": null,
   "src": "Quran 18:83-98, 31:12-19. Ibn Kathir, Stories of the Prophets and al-Bidayah wan-Nihayah.",
   "inv": null,
   "zone": "z3"
  },
  {
   "id": "13",
   "num": "13",
   "side": "t",
   "sort": 1,
   "dated": true,
   "yearLabel": "About 1 to 33 CE",
   "ah": null,
   "title": "Zechariah, John, Mary and Jesus",
   "map": "bc1",
   "pins": [
    [
     "The Temple, where Zechariah served",
     "Jerusalem, Al-Quds",
     31.78,
     35.23
    ],
    [
     "Where Mary gave birth, by tradition",
     "Bethlehem",
     31.7,
     35.2
    ],
    [
     "Where Jesus preached",
     "Nazareth and Galilee",
     32.7,
     35.3
    ]
   ],
   "story": "An old priest named Zechariah was given a son, John, who was serious about God from childhood. Mary, raised in the Temple, was told she would have a child although no man had touched her. She had him alone under a palm tree and brought him back to a community ready to think the worst, and the baby spoke from her arms and said he was God's servant. Jesus healed the blind, cured leprosy and brought the dead back to life, all by God's permission and never by his own power, and he told people to worship God alone. On the crucifixion the Quran is explicit and this is where the Muslim and Christian accounts part company: they did not kill him and they did not crucify him, but it was made to appear so, and God raised him up. Muslims believe he will return. John was executed by the ruler of his day for telling him the truth. Both accounts of the ending are stated here. The Islamic one leads, because that is this timeline's rule.",
   "meanwhile": "Rome rules Palestine through governors, so Jesus preaches inside an occupation. Han China, at the other end of the Silk Road, counts fifty-seven million people in a census. Neither empire is quite sure the other is real. In Ethiopia, the kingdom of Aksum is rising, and six centuries later its king will shelter the first Muslim refugees.",
   "pop": "About 170 million people alive, though some estimates go much higher. Rome itself has around a million.",
   "src": "Quran 3:33-59, 19:2-36, 4:157-159, 5:110-118. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z5"
  },
  {
   "id": "14b",
   "num": "14b",
   "side": "t",
   "sort": 250,
   "dated": false,
   "yearLabel": "Third to fifth century CE, by most commentators",
   "ah": null,
   "title": "The Sleepers in the Cave",
   "map": "400",
   "pins": [
    [
     "Ephesus, the oldest tradition",
     "Near Selcuk, Turkey",
     37.94,
     27.34
    ],
    [
     "A rival tradition",
     "Near Amman, Jordan",
     31.9,
     35.95
    ]
   ],
   "story": "A group of young men refused to join their city's official religion and hid in a cave rather than give in. God put them to sleep, and the Quran says they slept three hundred years and nine more. They woke thinking they had napped for a day, and sent one of them into town with an old coin to buy food. The coin gave them away, because it had been out of circulation for centuries. It is a strange and beautiful detail: the thing that reveals how much time has passed is the money. They fell asleep in a pagan empire and woke up in a Christian one.",
   "meanwhile": "Their sleep spans exactly the transformation shown on the other rail, when Rome went from persecuting Christians to being ruled by them.",
   "pop": null,
   "src": "Quran 18:9-26. Ibn Kathir, Stories of the Prophets.",
   "inv": null,
   "zone": "z5"
  },
  {
   "id": "14",
   "num": "14",
   "side": "t",
   "sort": 300,
   "dated": true,
   "yearLabel": "About 33 to 570 CE",
   "ah": null,
   "title": "The Long Gap",
   "map": "400",
   "pins": [
    [
     "Nicaea, where the creed was fixed",
     "Iznik, Turkey",
     40.43,
     29.72
    ],
    [
     "Najran, where believers were burned in a trench",
     "Najran, Saudi Arabia",
     17.49,
     44.13
    ],
    [
     "The elephant army stopped here",
     "Outside Makkah",
     21.3,
     39.9
    ]
   ],
   "story": "For roughly five hundred years no new prophet comes, and Islamic tradition has a name for this: the gap. The message of Jesus spreads and then changes under imperial patronage. In 325 the Roman emperor calls a council at Nicaea and the doctrine of the trinity is settled by a vote of bishops, and the Quran addresses that development directly. A few people keep looking for the older, simpler idea of one God, and the Quran calls them seekers. One of them, a Persian named Salman, walked from monastery to monastery across the Middle East looking for the truth and ended up in Madinah. In Yemen around 523, a king burned a community of believers alive in a trench for refusing to renounce their faith. Then in 570 an army with an elephant marched on Makkah to destroy the Kaaba and was destroyed instead. That happened in the year Muhammad was born.",
   "meanwhile": "Rome falls in the west in 476. Justinian's plague in 541 kills tens of millions and empties both great empires. India's Gupta age gives the world the number zero. China reunites under the Sui. It is a world waiting for something.",
   "pop": "About 190 to 200 million people alive by the year 600.",
   "src": "Quran 5:19, 4:171, 85:4-8, 105. Al-Mubarakpuri, The Sealed Nectar. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z5"
  },
  {
   "id": "15",
   "num": "15",
   "side": "t",
   "sort": 570,
   "dated": true,
   "yearLabel": "570 CE",
   "ah": null,
   "title": "Muhammad is born",
   "map": "600",
   "pins": [
    [
     "Born in Makkah",
     "Makkah, Saudi Arabia",
     21.42,
     39.83
    ]
   ],
   "story": "He was born into a respected but not wealthy family. His father died before he was born and his mother died when he was six, so he was raised first by his grandfather and then by an uncle. He worked as a shepherd, then as a trader, and he was so well known for keeping his word that the city called him the Trustworthy, which is a nickname worth having in a town that lived on contracts. At twenty-five he married Khadija, a businesswoman older than him who had employed him. At thirty-five he was asked to settle a dispute about which clan would lift the sacred black stone back into the wall of the Kaaba. He put it on a cloak and had all four clans lift a corner. That is the kind of man he was before anything else happened.",
   "meanwhile": "Byzantium and Persia are both ruled by strong emperors and both are about to ruin themselves. Plague keeps returning around the Mediterranean. In 589 China is reunited under the Sui.",
   "pop": "About 190 million people alive.",
   "src": "Quran 105. Al-Mubarakpuri, The Sealed Nectar. Ibn Kathir, al-Bidayah wan-Nihayah, volume 3.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "16",
   "num": "16",
   "side": "t",
   "sort": 610,
   "dated": true,
   "yearLabel": "610 CE",
   "ah": null,
   "title": "The cave, and the first word",
   "map": "600",
   "pins": [
    [
     "The cave of Hira",
     "Jabal al-Nur, outside Makkah",
     21.46,
     39.86
    ]
   ],
   "story": "He was forty, and he had taken to going alone to a cave in the hills above the city to think. Something came to him there and told him to read. He said he could not read, because he could not. It happened three times, and then came the first words of the Quran: read, in the name of your Lord who created. He went home shaking and asked his wife to cover him. Khadija believed him immediately, and she is the first Muslim. Her cousin, an old man who knew the scriptures, recognised what had happened and warned him that his own people would drive him out for it. He was right. For three years the message spread quietly among friends and family.",
   "meanwhile": "In this same year Heraclius seizes the Byzantine throne while Persia overruns Syria. The old world order and the new message begin in the same twelve months.",
   "pop": null,
   "src": "Quran 96:1-5, 74:1-7. Sahih al-Bukhari, the book of revelation. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "17",
   "num": "17",
   "side": "t",
   "sort": 613,
   "dated": true,
   "yearLabel": "613 to 615 CE",
   "ah": null,
   "title": "Persecution, and a Christian king gives shelter",
   "map": "600",
   "pins": [
    [
     "He preached openly from this hill",
     "Safa, Makkah",
     21.42,
     39.83
    ],
    [
     "The king of Abyssinia protected the refugees",
     "Aksum, Ethiopia",
     14.13,
     38.72
    ]
   ],
   "story": "When he began preaching in public, Makkah turned on the weakest of his followers, because they were the ones with no clan to protect them. Bilal, an enslaved African, was pinned under a boulder in the sun and told to renounce his faith, and he answered with one word: one, meaning God is one. Sumayya was killed and became the first martyr. So around eighty Muslims crossed the Red Sea to Christian Ethiopia and asked its king for asylum. Makkah sent a delegation to demand them back. The king listened to both sides, heard a passage of the Quran about Mary and Jesus read aloud, wept, and refused to hand them over. The first time Muslims were protected by a foreign state, it was a Christian one.",
   "meanwhile": "Persia captures Jerusalem in 614 and carries off the relic Christians called the True Cross. Makkah's pagans enjoy the news, because Rome shared their enemies' religion. A passage of the Quran replies that Rome will win within a few years, which at that moment looks impossible.",
   "pop": null,
   "src": "Quran 111, 30:1-5, and chapter 19, which was recited at the Ethiopian court. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "18",
   "num": "18",
   "side": "t",
   "sort": 617,
   "dated": true,
   "yearLabel": "617 to 620 CE",
   "ah": null,
   "title": "The boycott, and the worst year",
   "map": "600",
   "pins": [
    [
     "The clan was penned in this ravine",
     "Makkah",
     21.42,
     39.84
    ],
    [
     "He was stoned out of this town",
     "Taif, Saudi Arabia",
     21.27,
     40.42
    ]
   ],
   "story": "Makkah decided to starve the problem out. His entire clan, believers and unbelievers together, was cut off: no trade, no marriage, no food sold to them. They lived in a ravine for around three years and ate leaves. When it finally ended, his wife Khadija and his uncle Abu Talib, the two people who had protected him, died within months of each other. Muslims call it the year of sorrow. He walked to the nearby town of Taif to ask for support and was chased out by a mob throwing stones until his sandals filled with blood. Offered the chance to have the town destroyed, he refused, and said he hoped their children would one day worship God. That is the low point of his life, and it is the moment worth remembering him by.",
   "meanwhile": "Persia takes Egypt in 619 and Byzantium loses its breadbasket. The emperor considers abandoning Constantinople. The old order is falling apart at exactly the moment this man has nothing left.",
   "pop": null,
   "src": "Sahih al-Bukhari and Sahih Muslim. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "19",
   "num": "19",
   "side": "t",
   "sort": 621,
   "dated": true,
   "yearLabel": "About 620 to 621 CE",
   "ah": null,
   "title": "The night journey",
   "map": "600",
   "pins": [
    [
     "He left from the sanctuary at Makkah",
     "Makkah",
     21.42,
     39.83
    ],
    [
     "He arrived at the far mosque",
     "Jerusalem, Al-Quds",
     31.776,
     35.235
    ]
   ],
   "story": "In one night he was taken from Makkah to Jerusalem and then upward through the heavens. In Jerusalem he led the earlier prophets in prayer, which is a striking image: the whole line standing behind the last of them. The five daily prayers were given on that journey. When he told Makkah about it the next morning, most people laughed. His friend Abu Bakr was asked whether he believed it and said that if the man says so, it is true, which is how he earned the name the Truthful. This is the night that ties Makkah and Jerusalem together in Muslim geography, and it is why the city matters to a quarter of the human race.",
   "meanwhile": null,
   "pop": null,
   "src": "Quran 17:1, 53:1-18. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "20",
   "num": "20",
   "side": "t",
   "sort": 622,
   "dated": true,
   "yearLabel": "622 CE",
   "ah": "Year 1",
   "title": "The migration to Madinah",
   "map": "600",
   "pins": [
    [
     "Three days hiding in this cave",
     "Cave of Thawr, Makkah",
     21.38,
     39.85
    ],
    [
     "Yathrib takes a new name: Madinah",
     "Madinah, Saudi Arabia",
     24.47,
     39.61
    ],
    [
     "The first mosque",
     "Quba, Madinah",
     24.44,
     39.62
    ]
   ],
   "story": "Makkah decided to kill him, and the clans agreed to strike together so that no single family could be blamed. Ali slept in his bed as a decoy. He and Abu Bakr hid in a cave for three days while search parties passed within feet of them, and he told his frightened friend not to grieve, because God was with them. Then they rode north to a city that had invited him to come and govern it. He renamed nothing by force. The people of Madinah paired each penniless refugee with a local family who shared their home and income with them, which is the most successful refugee resettlement scheme anyone has ever run. He then wrote an agreement binding the Muslims and the Jewish tribes of the city into one community with a duty to defend each other. The Islamic calendar counts its years from this journey, not from his birth, because a community mattered more than a man.",
   "meanwhile": "In this exact year Heraclius launches the counter-attack that will win Byzantium's war. Tang China is four years old. Across the ocean, Maya kings are carving dates onto stone monuments that we can still read to the day.",
   "pop": "About 200 million people alive.",
   "src": "Quran 9:40, 8:30. Al-Mubarakpuri, The Sealed Nectar. Al-Tabari, volumes 6 and 7.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "21",
   "num": "21",
   "side": "t",
   "sort": 624,
   "dated": true,
   "yearLabel": "624 CE",
   "ah": "Year 2",
   "title": "Badr",
   "map": "600",
   "pins": [
    [
     "The wells of Badr",
     "Badr, Saudi Arabia",
     23.78,
     38.79
    ]
   ],
   "story": "Three hundred and thirteen men, badly armed, faced roughly a thousand. They won. The Quran calls the day the criterion, the day that separated one thing from another, and reminds them afterwards that they were few. Abu Jahl, the man who had led the persecution, was killed. What happened to the prisoners is the detail worth keeping: any captive who could read was allowed to buy his freedom by teaching ten Muslim children to read. A battle ended in a literacy programme.",
   "meanwhile": "The Byzantine emperor is deep inside Persian territory dismantling an empire. Neither superpower notices a skirmish at a desert well, and both will be governed from that direction within twenty years.",
   "pop": null,
   "src": "Quran 8, and 3:123-127. Al-Mubarakpuri, The Sealed Nectar. Al-Tabari, volume 7.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "22",
   "num": "22",
   "side": "t",
   "sort": 625,
   "dated": true,
   "yearLabel": "625 CE",
   "ah": "Year 3",
   "title": "Uhud",
   "map": "600",
   "pins": [
    [
     "Mount Uhud",
     "North of Madinah",
     24.5,
     39.61
    ]
   ],
   "story": "Makkah came back with three thousand men to avenge Badr. The Muslims were winning until the archers, told to hold a hill whatever happened, saw the enemy running and came down to collect the loot. Khalid ibn al-Walid, then still fighting for the other side, took his cavalry round the empty hill and turned the battle. The Prophet was wounded in the face. His uncle Hamza was killed and his body mutilated. The Quran spends fifty-nine verses on this defeat, dissecting it, and does not spare anyone. That is unusual for a religious text: it is a scripture that reviews its own side's military failure in public.",
   "meanwhile": null,
   "pop": null,
   "src": "Quran 3:121-179. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "23",
   "num": "23",
   "side": "t",
   "sort": 627,
   "dated": true,
   "yearLabel": "627 CE",
   "ah": "Year 5",
   "title": "The trench",
   "map": "600",
   "pins": [
    [
     "A trench was dug across the open ground",
     "North of Madinah",
     24.49,
     39.59
    ]
   ],
   "story": "Ten thousand men came to finish Madinah for good. Salman, a Persian who had joined the Muslims, suggested something nobody in Arabia had seen: dig a trench across the exposed side of the city. Arabian cavalry had no answer to it. The siege dragged on, the weather turned savage, the alliance fell apart, and the attackers went home. Afterwards the Prophet said that from now on they would go to Makkah rather than Makkah coming to them. The balance of power in Arabia had turned, and everyone knew it.",
   "meanwhile": "In the same months, Heraclius destroys the Persian army at Nineveh, the very city Jonah had been sent to. The Persian emperor is overthrown and killed the following year. Two sieges, one in Arabia and one in Iraq, break within weeks of each other, and the Quran had said Rome would win.",
   "pop": null,
   "src": "Quran 33:9-27. Al-Mubarakpuri, The Sealed Nectar. Al-Tabari, volume 8.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "24",
   "num": "24",
   "side": "t",
   "sort": 628,
   "dated": true,
   "yearLabel": "628 CE",
   "ah": "Year 6",
   "title": "The treaty at Hudaybiyyah",
   "map": "600",
   "pins": [
    [
     "Where the treaty was signed",
     "Hudaybiyyah, outside Makkah",
     21.44,
     39.61
    ]
   ],
   "story": "Fourteen hundred Muslims walked to Makkah unarmed to perform the pilgrimage and were stopped. What followed was a negotiation, and the terms looked humiliating. They had to go home without visiting the Kaaba. Any Makkan who defected to the Muslims had to be returned, but not the other way round. His own followers were furious. He signed anyway. The Quran calls the treaty a clear victory, and it was, because peace opened the roads. More people accepted Islam in the two years of that truce than in the previous nineteen years of preaching. From this position of peace he sent letters to the rulers of the known world, to Byzantium, Persia, Ethiopia and Egypt, inviting them to the faith.",
   "meanwhile": null,
   "pop": null,
   "src": "Quran 48. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "25",
   "num": "25",
   "side": "t",
   "sort": 630,
   "dated": true,
   "yearLabel": "630 CE",
   "ah": "Year 8",
   "title": "Makkah is taken without a fight",
   "map": "600",
   "pins": [
    [
     "He entered the city with his head bowed",
     "Makkah",
     21.42,
     39.83
    ]
   ],
   "story": "The truce was broken by Makkah's allies, and ten thousand men marched on the city. It surrendered almost without a fight. He rode in with his head bowed so low it nearly touched the saddle, which is not how conquerors enter cities. The three hundred and sixty idols around the Kaaba were destroyed. Then he stood in front of the people who had tortured his followers, boycotted his family, driven him out and tried to kill him, and asked them what they expected. They said: mercy, from a generous brother. He said: go, you are free. Bilal, who had been tortured on those streets, climbed onto the roof of the Kaaba and called the prayer.",
   "meanwhile": "In the same year the Byzantine emperor carries the True Cross back into Jerusalem in triumph, the high point of Christian Rome. Eight years later that city will surrender to a Muslim caliph.",
   "pop": null,
   "src": "Quran 17:81, 110, 9:25-26. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "26",
   "num": "26",
   "side": "t",
   "sort": 632,
   "dated": true,
   "yearLabel": "632 CE",
   "ah": "Years 10 to 11",
   "title": "The farewell sermon, and his death",
   "map": "600",
   "pins": [
    [
     "He spoke to a hundred thousand people here",
     "Arafat, outside Makkah",
     21.35,
     39.98
    ],
    [
     "He died in Madinah",
     "Madinah",
     24.47,
     39.61
    ]
   ],
   "story": "On a hill outside Makkah, in front of perhaps a hundred thousand people, he gave a speech that reads like a constitution. Your lives and your property are sacred to each other. All the blood feuds of the past are cancelled, starting with one in my own family. All interest owed is cancelled, starting with my uncle's. Women have rights over you as you have rights over them. An Arab is not better than a non-Arab, and a white man is not better than a black man, except by decency. Three months later he was dead, in his wife's room, with no palace, no fortune and no appointed heir. Abu Bakr steadied a panicking city with one sentence: whoever worshipped Muhammad should know that he is dead, and whoever worships God should know that God is alive and does not die.",
   "meanwhile": null,
   "pop": "About 200 million people alive. His community numbers perhaps a hundred thousand.",
   "src": "Quran 5:3, 3:144. Sahih al-Bukhari. Al-Mubarakpuri, The Sealed Nectar.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "27",
   "num": "27",
   "side": "t",
   "sort": 633,
   "dated": true,
   "yearLabel": "632 to 634 CE",
   "ah": "Years 11 to 13",
   "title": "Abu Bakr holds it together",
   "map": "600",
   "pins": [
    [
     "He governed from Madinah",
     "Madinah",
     24.47,
     39.61
    ],
    [
     "The costly battle at Yamamah",
     "Central Arabia",
     24.1,
     47.3
    ]
   ],
   "story": "The moment the Prophet died, most of Arabia decided the deal was off. Tribes stopped paying the welfare tax, and several men announced that they were prophets now. Abu Bakr, a mild man who wept easily, refused to concede a single point and fought a hard year of campaigns to hold the community together. At the battle of Yamamah a large number of men who had memorised the entire Quran were killed, and it occurred to Umar that if this kept happening the text could be lost. So Abu Bakr ordered it collected and written into a single copy. It is difficult to overstate how important that decision was.",
   "meanwhile": "Byzantium and Persia have just finished ruining each other in a twenty-six year war. Neither has the money or the men to hold its frontier, and neither has noticed what is now organised on the other side of it.",
   "pop": null,
   "src": "Sahih al-Bukhari. Ibn Kathir, al-Bidayah wan-Nihayah, volume 5. Al-Tabari, volumes 10 and 11.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "28",
   "num": "28",
   "side": "t",
   "sort": 638,
   "dated": true,
   "yearLabel": "634 to 644 CE",
   "ah": "Years 13 to 23",
   "title": "Umar, and ten years that redrew the map",
   "map": "700",
   "pins": [
    [
     "Yarmouk, 636: Byzantine Syria falls",
     "Yarmouk river",
     32.75,
     35.95
    ],
    [
     "Qadisiyyah, 636: the gate to Persia",
     "Near Kufa, Iraq",
     31.6,
     44.5
    ],
    [
     "Jerusalem surrenders, 638",
     "Al-Quds",
     31.78,
     35.23
    ],
    [
     "Egypt, 639 to 642",
     "Fustat, now Cairo",
     30.04,
     31.24
    ],
    [
     "Nihawand, 642: Persia collapses",
     "Nahavand, Iran",
     34.19,
     48.38
    ]
   ],
   "story": "In ten years, a thousand years of settled power in the Middle East came apart. Byzantine Syria fell at Yarmouk, Persian Iraq fell at Qadisiyyah, and Persia itself broke at Nihawand. When Jerusalem surrendered, the patriarch insisted on handing the keys to the caliph in person. Umar arrived having shared the ride with his servant, taking turns on one camel, and the servant's turn happened to fall on the last stretch, so the most powerful man in the region walked into Jerusalem on foot leading the camel while his servant rode. Invited to pray inside the Church of the Holy Sepulchre, he refused, and prayed outside instead, saying that if he prayed there Muslims would later claim the building. It is still a church. He signed a document guaranteeing the Christians their lives, their property and their worship. He also built a state: a register of pay, salaried judges, garrison cities, public grain stores, a census, and the calendar Muslims still use. He was murdered while leading prayer.",
   "meanwhile": "The Byzantine emperor dies watching the reconquest of his life evaporate. In these exact years the Chinese monk Xuanzang is walking across India and writing down everything he sees, which is our best description of that country at the moment this was happening on the other side of the mountains.",
   "pop": "The conquered lands hold fifteen to twenty million people, governed from a town of mud-brick houses.",
   "src": "Ibn Kathir, al-Bidayah wan-Nihayah, volume 5. Al-Tabari, volumes 12 to 14. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "29",
   "num": "29",
   "side": "t",
   "sort": 650,
   "dated": true,
   "yearLabel": "644 to 656 CE",
   "ah": "Years 23 to 35",
   "title": "Uthman, one book and the first civil war",
   "map": "700",
   "pins": [
    [
     "Copies of the Quran are sent to every province",
     "Madinah",
     24.47,
     39.61
    ],
    [
     "Cyprus, 649: the first Muslim fleet",
     "Cyprus",
     35.1,
     33.4
    ]
   ],
   "story": "As Islam spread to people who did not speak Arabic, commanders began reporting arguments about how the Quran should be recited. Uthman had a standard written copy produced and sent one to each province, and had the variant copies destroyed. Every Quran in the world today descends from that text. He was a gentle man in a job that had outgrown gentleness. Complaints about his governors, some fair and some manufactured, grew into a rebellion. Rebels besieged his house in Madinah and killed him while he was reading the book he had preserved. It was the first time Muslims had killed a caliph, and the community never fully recovered from it.",
   "meanwhile": null,
   "pop": null,
   "src": "Sahih al-Bukhari. Ibn Kathir, volume 5. Al-Tabari, volume 15.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "30",
   "num": "30",
   "side": "t",
   "sort": 658,
   "dated": true,
   "yearLabel": "656 to 661 CE",
   "ah": "Years 35 to 40",
   "title": "Ali, and the community splits",
   "map": "700",
   "pins": [
    [
     "The capital moves to Kufa",
     "Kufa, Iraq",
     32.03,
     44.4
    ],
    [
     "The battle of Siffin, 657",
     "On the Euphrates, Syria",
     35.95,
     39.02
    ]
   ],
   "story": "Ali, the Prophet's cousin and son-in-law, inherited a community demanding justice for a murdered caliph while some of the murderers stood in his own army. He fought two civil wars he did not want. At Siffin the fighting was stopped by a call for arbitration, and when he accepted it, a group of his own supporters turned on him for agreeing that men could judge what they said only God could judge. They became the first extremist sect in Islamic history, and one of them killed him at dawn prayer. His son Hasan then gave up his claim to avoid further bloodshed, and the community was briefly whole again. This is the point where Sunni and Shia memory diverge. This site follows the classical Sunni sources, as it says it does, and notes plainly that the other tradition remembers these events differently.",
   "meanwhile": "The political centre of Islam leaves Arabia for Iraq and never returns.",
   "pop": null,
   "src": "Ibn Kathir, volume 5. Al-Tabari, volumes 16 and 17. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z6"
  },
  {
   "id": "31",
   "num": "31",
   "side": "t",
   "sort": 670,
   "dated": true,
   "yearLabel": "661 to 683 CE",
   "ah": "Years 41 to 64",
   "title": "Damascus, and the killing at Karbala",
   "map": "700",
   "pins": [
    [
     "The capital is now Damascus",
     "Damascus, Syria",
     33.51,
     36.29
    ],
    [
     "Husayn was killed here in 680",
     "Karbala, Iraq",
     32.62,
     44.03
    ]
   ],
   "story": "Muawiya moved the capital to Damascus, ruled with famous patience, and then did something the Islamic sources themselves mark as a turning point: he made his son his heir. The caliphate became a monarchy. When Muawiya died, his son Yazid demanded allegiance, and Husayn, the Prophet's grandson, refused to give it to a man he considered unfit. He set out for Iraq with his family and around seventy companions and was surrounded at Karbala by an army of thousands. They cut him off from the river and let his children go thirsty for three days. Then they killed him, and killed almost every male in his family. It is the most painful memory in Muslim history and it is mourned to this day. It should be read slowly.",
   "meanwhile": "Constantinople survives two Arab sieges, saved by a secret incendiary weapon nobody has ever fully reconstructed. The Bulgars cross the Danube and found Bulgaria in 681.",
   "pop": null,
   "src": "Al-Tabari, volumes 18 and 19. Ibn Kathir, volume 6. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "32",
   "num": "32",
   "side": "t",
   "sort": 705,
   "dated": true,
   "yearLabel": "685 to 715 CE",
   "ah": "Years 66 to 96",
   "title": "An empire on three continents",
   "map": "700",
   "pins": [
    [
     "The Dome of the Rock, 691",
     "Jerusalem",
     31.778,
     35.235
    ],
    [
     "Tariq crosses into Spain, 711",
     "Gibraltar, which is named after him",
     36.14,
     -5.35
    ],
    [
     "Muhammad bin Qasim lands in Sindh, 711",
     "Near Karachi, Pakistan",
     24.86,
     67.01
    ],
    [
     "Qutayba takes Bukhara and Samarkand",
     "Uzbekistan",
     39.65,
     66.96
    ]
   ],
   "story": "Abd al-Malik turned a conquest into a state. Arabic became the language of administration everywhere. A Muslim coinage, the gold dinar and the silver dirham, replaced Byzantine and Persian money and became the trusted currency from Spain to India. The Dome of the Rock went up in Jerusalem in 691 and is the oldest Islamic building still standing. Then in a single extraordinary year, 711, three separate armies moved: Tariq ibn Ziyad crossed into Spain at the rock that still carries his name, Muhammad bin Qasim landed in what is now Pakistan, and Qutayba pushed into Central Asia. For the first time in history one state stretched from the Atlantic to the edge of China.",
   "meanwhile": "Japan founds its first permanent capital at Nara in 710. In 732 a Frankish army stops a raiding column at Tours in France, a battle European schoolbooks made famous. The second Arab siege of Constantinople fails in 718, and that frontier holds for seven hundred years.",
   "pop": "About 210 million people alive. The caliphate governs thirty to thirty-five million of them.",
   "src": "Ibn Kathir, volume 6. Al-Tabari, volumes 21 to 23. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "33",
   "num": "33",
   "side": "t",
   "sort": 718,
   "dated": true,
   "yearLabel": "717 to 720 CE",
   "ah": "Years 99 to 101",
   "title": "Umar II, and two and a half years",
   "map": "700",
   "pins": [
    [
     "He ruled from Damascus",
     "Damascus",
     33.51,
     36.29
    ]
   ],
   "story": "He inherited an empire and immediately gave back the land and money his family had taken. He stopped the practice of cursing Ali from the pulpits. He sent scholars where his predecessors had sent soldiers, and conversions rose sharply as a result, which cost the treasury money, and he did not care. He ordered the sayings of the Prophet collected and written down for the first time officially. The detail everyone remembers is this: in some provinces his tax collectors reported that they could not find anyone poor enough to accept the welfare payment, and had to spend it freeing slaves instead. He ruled for two and a half years and Muslims have measured every ruler since against him.",
   "meanwhile": null,
   "pop": null,
   "src": "Ibn Kathir, volume 6. Sarwat Saulat, volume 1.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "34",
   "num": "34",
   "side": "t",
   "sort": 750,
   "dated": true,
   "yearLabel": "750 CE",
   "ah": "Year 132",
   "title": "The Abbasid revolution",
   "map": "800",
   "pins": [
    [
     "Black banners come out of Khurasan",
     "Merv, Turkmenistan",
     37.66,
     62.19
    ],
    [
     "The Umayyads are destroyed at the Zab",
     "Great Zab river, Iraq",
     36.0,
     43.4
    ],
    [
     "One prince escapes to Spain",
     "Cordoba",
     37.88,
     -4.78
    ]
   ],
   "story": "Non-Arab Muslims, especially Persians, were tired of being second-class citizens in a religion that said they were not. That resentment, plus the memory of Karbala, plus a well-run underground movement, brought the Umayyads down. The family was hunted and killed. One young prince got away, crossed North Africa alone, reached Spain, and founded a state there that would last for centuries. From this moment there is more than one Muslim government in the world, permanently.",
   "meanwhile": null,
   "pop": null,
   "src": "Al-Tabari, volume 27. Sarwat Saulat, volume 2.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "35",
   "num": "35",
   "side": "t",
   "sort": 790,
   "dated": true,
   "yearLabel": "762 to 809 CE",
   "ah": "Years 145 to 193",
   "title": "Baghdad",
   "map": "800",
   "pins": [
    [
     "The round city is founded in 762",
     "Baghdad",
     33.31,
     44.36
    ],
    [
     "Papermakers captured at Talas in 751",
     "Talas, Kyrgyzstan",
     42.52,
     72.23
    ],
    [
     "An elephant is sent to Charlemagne",
     "Aachen, Germany",
     50.78,
     6.08
    ]
   ],
   "story": "Al-Mansur built a perfectly round city at the point where the Tigris and Euphrates come closest, on the trade routes between everywhere and everywhere. Within fifty years it may have been the largest city on earth. Harun al-Rashid ruled it at its height, exchanged embassies with Charlemagne in Germany and with Tang China, and sent Charlemagne an elephant, which walked to Aachen. The single most important thing that happened, though, was quiet: at the battle of Talas in 751 the Muslims captured Chinese papermakers. Paper mills opened in Samarkand and then Baghdad. Books stopped being luxury objects. Everything that follows depends on that.",
   "meanwhile": "Charlemagne is crowned emperor in Rome in 800. Vikings raid Lindisfarne in 793 and will soon be trading furs for Baghdad's silver coins. China is torn apart by the An Lushan rebellion, one of the deadliest wars in history.",
   "pop": "About 220 to 250 million people alive. Baghdad, Cordoba and Chang'an are the three great cities of the world.",
   "src": "Sarwat Saulat, volume 2. Al-Tabari, volumes 28 to 34.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "35b",
   "num": "35b",
   "side": "t",
   "sort": 830,
   "dated": true,
   "yearLabel": "About 800 to 1050 CE",
   "ah": "3rd to 5th century AH",
   "title": "The House of Wisdom: algebra, optics and medicine",
   "map": "800",
   "pins": [
    [
     "The House of Wisdom",
     "Baghdad",
     33.31,
     44.36
    ],
    [
     "Ibn Sina wrote the Canon of Medicine here",
     "Bukhara and Hamadan",
     39.77,
     64.42
    ],
    [
     "Ibn al-Haytham worked on optics in Cairo",
     "Cairo, Egypt",
     30.04,
     31.24
    ],
    [
     "Al-Biruni measured the earth from a mountain here",
     "Nandana, Punjab, Pakistan",
     32.72,
     73.28
    ]
   ],
   "story": "This is the part of the story most people were never taught, so it is worth naming the individuals. Al-Khwarizmi wrote a book about balancing equations, and the Arabic word in its title, al-jabr, became algebra. His own name, mangled by Latin scribes, became the word algorithm, which is now how the world describes the thing your phone runs on. Ibn al-Haytham worked out that we see because light enters the eye, not because the eye emits rays, and he insisted that a claim means nothing until it survives an experiment. That is the scientific method, three centuries before Europe adopted it. Al-Zahrawi in Spain wrote an illustrated surgical textbook and designed instruments you would still recognise on a modern tray. Ibn Sina's Canon of Medicine was the standard textbook in European universities into the 1600s. Al-Biruni stood on a mountain in what is now Pakistan, measured the angle to the horizon, and calculated the size of the earth to within one per cent. They translated the Greeks, and then went past them.",
   "meanwhile": "Europe at this moment is largely rural and mostly illiterate outside the monasteries. When European universities appear in the 1100s, their science curriculum is substantially made of translations from Arabic, done in Spain and Sicily. That transfer is one of the most consequential things in this timeline and it is almost never drawn on a map.",
   "pop": null,
   "src": "Sarwat Saulat, volume 2. Ibn Kathir, volume 6. Standard histories of science.",
   "inv": "Algebra. The word algorithm. The experimental method in optics. Surgical instruments still in use. The astrolabe refined into a precision instrument. Hospitals with wards, case notes and licensing exams for doctors.",
   "zone": "z7"
  },
  {
   "id": "36",
   "num": "36",
   "side": "t",
   "sort": 970,
   "dated": true,
   "yearLabel": "900s to 1000s CE",
   "ah": "4th century AH",
   "title": "One faith, many states",
   "map": "1000",
   "pins": [
    [
     "The caliphate of Cordoba, 929",
     "Cordoba, Spain",
     37.88,
     -4.78
    ],
    [
     "Cairo founded 969, al-Azhar 970",
     "Cairo, Egypt",
     30.04,
     31.24
    ],
    [
     "Ibn Fadlan's embassy to the Volga, 922",
     "Volga Bulgaria, Russia",
     55.0,
     49.3
    ],
    [
     "Islam arrives by trade, not conquest",
     "Kilwa, Tanzania",
     -8.96,
     39.51
    ]
   ],
   "story": "By now there is a caliph in Baghdad, a rival caliph in Cairo and a third in Cordoba, and yet it is one civilisation, because the law, the language and the pilgrimage hold it together. Cordoba has street lighting and paved roads while Paris is mud. Al-Azhar is founded in Cairo and is still teaching. Meanwhile Islam spreads to West Africa, the Swahili coast, the Volga and Southeast Asia almost entirely through merchants and scholars rather than armies, which is worth saying because it is not the story most people are told.",
   "meanwhile": "Christianity splits into Catholic and Orthodox in 1054. The Normans take England in 1066. Song China invents printing with movable type, paper money and the compass, and is probably the most technologically advanced society on earth.",
   "pop": "About 265 million people alive. Cordoba has a quarter of a million or more, while London is a small town.",
   "src": "Sarwat Saulat, volume 2. McEvedy and Jones.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "37",
   "num": "37",
   "side": "t",
   "sort": 1130,
   "dated": true,
   "yearLabel": "1071 to 1187 CE",
   "ah": "Years 463 to 583",
   "title": "The Crusades, and Saladin",
   "map": "1100",
   "pins": [
    [
     "Manzikert, 1071: Anatolia opens to the Turks",
     "Malazgirt, Turkey",
     39.15,
     42.54
    ],
    [
     "Jerusalem falls to the First Crusade, 1099",
     "Al-Quds",
     31.78,
     35.23
    ],
    [
     "Hattin, 1187: Saladin wins it back",
     "Horns of Hattin, Galilee",
     32.8,
     35.45
    ]
   ],
   "story": "The Turks broke a Byzantine army at Manzikert and Anatolia began the long process of becoming Turkey. Byzantium asked western Europe for help, and got rather more than it asked for. The First Crusade took Jerusalem in 1099 and massacred its people, which chroniclers on both sides recorded without embarrassment. Ninety years later Saladin, a Kurd who had made himself ruler of Egypt and Syria, destroyed the Crusader army at Hattin and took Jerusalem back. He did not massacre anybody. He ransomed the poor out of his own money when the city could not pay, and let the Christians keep their churches. European writers made him the model of chivalry, which is a strange fate for an enemy, and a deserved one.",
   "meanwhile": "The first universities appear in Europe, at Bologna, Paris and Oxford, and much of what they teach in science and medicine comes from Arabic books translated in Spain. Angkor Wat is being built in Cambodia.",
   "pop": null,
   "src": "Sarwat Saulat, volume 2. Ibn Kathir, volume 7.",
   "inv": null,
   "zone": "z7"
  },
  {
   "id": "38",
   "num": "38",
   "side": "t",
   "sort": 1258,
   "dated": true,
   "yearLabel": "1258 to 1260 CE",
   "ah": "Year 656",
   "title": "Baghdad is destroyed, and the tide turns",
   "map": "1279",
   "pins": [
    [
     "Baghdad is sacked, February 1258",
     "Baghdad",
     33.31,
     44.36
    ],
    [
     "Ain Jalut, September 1260",
     "Spring of Goliath, Palestine",
     32.55,
     35.35
    ]
   ],
   "story": "The Mongols had already flattened Central Asia. Cities of hundreds of thousands, Bukhara, Samarkand, Merv, were emptied. Then Hulagu came for Baghdad. The last Abbasid caliph was killed, the population was massacred, and the libraries were thrown into the Tigris, which chroniclers say ran black with ink. Five centuries of the Abbasid caliphate ended in a week. It is the darkest page in the classical histories and they do not try to soften it. Two years later, at a spring in Palestine, the Mamluks of Egypt beat a Mongol army in open battle and stopped the advance permanently. Egypt became the refuge of a wrecked civilisation. And then something nobody expected: within two generations, the Mongol rulers of Iran and Russia became Muslims themselves.",
   "meanwhile": "The Mongol empire is the largest land empire there has ever been, run by census, relay post and terror. Its peace reopens the Silk Road, and Marco Polo walks east along it.",
   "pop": "The Mongol wars cost tens of millions of lives.",
   "src": "Sarwat Saulat, volume 2. Ibn Kathir, volume 7.",
   "inv": null,
   "zone": "z8"
  },
  {
   "id": "39",
   "num": "39",
   "side": "t",
   "sort": 1330,
   "dated": true,
   "yearLabel": "1260 to 1400s CE",
   "ah": "7th to 8th century AH",
   "title": "Mansa Musa, Ibn Battuta, and the plague",
   "map": "1400",
   "pins": [
    [
     "Mansa Musa's pilgrimage, 1324",
     "Timbuktu, Mali",
     16.77,
     -3.01
    ],
    [
     "Ibn Battuta sets out, 1325",
     "Tangier, Morocco",
     35.76,
     -5.83
    ],
    [
     "The Delhi Sultanate",
     "Delhi, India",
     28.61,
     77.21
    ]
   ],
   "story": "The centre of gravity multiplies. In West Africa, Mansa Musa of Mali went on pilgrimage in 1324 and gave away so much gold in Cairo on the way that the price of gold there reportedly stayed depressed for years. He came home and built libraries in Timbuktu. In Morocco, a young judge named Ibn Battuta left for the pilgrimage and did not stop travelling for twenty-nine years, reaching India, the Maldives, Indonesia and China, and he did nearly all of it inside a single connected Muslim world that fed him, employed him and married him off along the way. Ibn Khaldun wrote a book explaining why civilisations rise and fall, and effectively invented social history. And then, in 1347, the plague arrived and killed perhaps a third of everyone.",
   "meanwhile": "The Black Death kills across Europe, Africa and Asia without preference. The Ming overthrow the Mongols in China. Timur builds a last steppe empire and nearly strangles the Ottomans at birth in 1402.",
   "pop": "World population falls from about 440 million to about 370 million.",
   "src": "Sarwat Saulat, volumes 2 and 3. McEvedy and Jones.",
   "inv": null,
   "zone": "z8"
  },
  {
   "id": "37b",
   "num": "37b",
   "side": "t",
   "sort": 1420,
   "dated": true,
   "yearLabel": "1259 to 1449 CE",
   "ah": "7th to 9th century AH",
   "title": "The observatories: Maragha and Samarkand",
   "map": "1400",
   "pins": [
    [
     "The Maragha observatory, built 1259",
     "Maragheh, Iran",
     37.39,
     46.24
    ],
    [
     "Ulugh Beg's observatory, 1420s",
     "Samarkand, Uzbekistan",
     39.65,
     66.96
    ]
   ],
   "story": "Here is one of the strangest stories in the history of science. The Mongol who destroyed Baghdad also paid for an observatory at Maragha in Iran, because he wanted astrologers. The scientists he hired used the money to fix a problem in Greek astronomy that had bothered people for a thousand years, and produced mathematical models of planetary motion that are, in places, identical to the ones Copernicus published three hundred years later. Historians are still arguing about exactly how they reached him, but reach him they did. Two centuries after Maragha, a Mughal-descended prince named Ulugh Beg built an observatory at Samarkand and personally catalogued a thousand stars with an accuracy nobody would beat until the telescope. He was a king who preferred astronomy to ruling, and his own son had him killed for it.",
   "meanwhile": "Europe at this point has no observatory of comparable quality. The instruments and the star tables come west, and so does the mathematics, and the scientific revolution of the 1500s is built partly on them.",
   "pop": null,
   "src": "Sarwat Saulat, volume 3. Standard histories of astronomy.",
   "inv": "Accurate planetary models later found in Copernicus. Star catalogues unmatched before the telescope. Trigonometry as a distinct discipline. The most precise sine tables in the world at the time.",
   "zone": "z8"
  },
  {
   "id": "40",
   "num": "40",
   "side": "t",
   "sort": 1453,
   "dated": true,
   "yearLabel": "29 May 1453",
   "ah": "Year 857",
   "title": "Constantinople becomes Istanbul",
   "map": "1492",
   "pins": [
    [
     "The walls are breached",
     "Istanbul, Turkey",
     41.01,
     28.98
    ]
   ],
   "story": "Mehmed II was twenty-one. The city had held out against every army for a thousand years behind the strongest walls in the world. He had cannon big enough to break them, and when his fleet could not get into the harbour he had his ships dragged overland on greased timbers and put them in behind the chain. The city fell, and the Roman empire, which had begun before Christ, ended on a Tuesday morning. Hagia Sophia became a mosque. Greek scholars fled west carrying manuscripts, and their arrival helped set off the Renaissance in Italy, so the same event closes one civilisation and helps to open another.",
   "meanwhile": "Gutenberg is printing his first books in Germany in these very years. Europe gets cheap books at precisely the moment it receives the Greek library.",
   "pop": null,
   "src": "Sarwat Saulat, volume 3.",
   "inv": null,
   "zone": "z9"
  },
  {
   "id": "41",
   "num": "41",
   "side": "t",
   "sort": 1492,
   "dated": true,
   "yearLabel": "1492",
   "ah": "Year 897",
   "title": "Granada falls, and Columbus sails",
   "map": "1492",
   "pins": [
    [
     "The last Muslim state in Spain surrenders",
     "Granada, Spain",
     37.18,
     -3.6
    ],
    [
     "Ottoman ships collect the expelled Jews",
     "Istanbul",
     41.01,
     28.98
    ]
   ],
   "story": "Two things happen in one year, and they are connected. In January, the last Muslim kingdom in Spain surrenders after seven hundred and eighty-one years of Muslim rule in the peninsula. In the same months, the monarchs who took it agree to fund a Genoese sailor's improbable voyage west. Muslims and Jews in Spain are then given a choice between conversion and exile. The Ottoman sultan sends ships to carry the expelled Jews to safety in his territory, and reportedly remarks that a king who impoverishes his own country to enrich another cannot be called wise. It is the hinge of world history: an old frontier closes and the Atlantic opens.",
   "meanwhile": null,
   "pop": null,
   "src": "Sarwat Saulat, volume 3.",
   "inv": null,
   "zone": "z9"
  },
  {
   "id": "42",
   "num": "42",
   "side": "t",
   "sort": 1517,
   "dated": true,
   "yearLabel": "1517",
   "ah": "Year 923",
   "title": "The caliphate moves to Istanbul",
   "map": "1530",
   "pins": [
    [
     "Selim I takes Cairo",
     "Cairo",
     30.04,
     31.24
    ],
    [
     "Guardianship of Makkah and Madinah passes to the Ottomans",
     "Makkah",
     21.42,
     39.83
    ],
    [
     "In the same year, in Germany",
     "Wittenberg",
     51.87,
     12.65
    ]
   ],
   "story": "The Ottoman sultan defeated the Mamluks and took Egypt, Syria and the guardianship of Makkah and Madinah. With it, by Ottoman account, came the title of caliph, which stayed in Istanbul until 1924. In the very same year, a German monk nailed a list of complaints to a church door in Wittenberg and split western Christianity in half. Two things worth putting side by side. Meanwhile three Muslim empires now hold much of the world: the Ottomans, the Safavids in Iran, who made the country Shia by force from 1501 and hardened a division you can still see on a map today, and the Mughals in India from 1526, who ruled the richest state on earth.",
   "meanwhile": null,
   "pop": "Mughal India holds a hundred to a hundred and fifty million people and produces roughly a quarter of everything made on earth.",
   "src": "Sarwat Saulat, volume 3.",
   "inv": null,
   "zone": "z9"
  },
  {
   "id": "43",
   "num": "43",
   "side": "t",
   "sort": 1529,
   "dated": true,
   "yearLabel": "1520 to 1566",
   "ah": "Years 926 to 974",
   "title": "Suleiman",
   "map": "1530",
   "pins": [
    [
     "The first siege of Vienna, 1529",
     "Vienna, Austria",
     48.21,
     16.37
    ],
    [
     "Sinan builds Istanbul",
     "Istanbul",
     41.01,
     28.98
    ]
   ],
   "story": "Europeans called him the Magnificent. His own people called him the Lawgiver, which tells you what they valued. He took Belgrade, Rhodes and Hungary and reached the gates of Vienna. His admiral ran the Mediterranean. He allied with Catholic France against Catholic Austria, because politics has never been only about religion. His architect Sinan, who had started as a conscripted Christian boy, built mosques that are still among the most beautiful buildings ever raised. Istanbul, at six or seven hundred thousand people, was the largest city in Europe.",
   "meanwhile": "Cortes destroys the Aztec empire in 1521 and Pizarro the Inca in 1533. American silver begins pouring into the world economy, and it will eventually wreck Ottoman prices. Copernicus publishes in 1543. Russia takes the Muslim city of Kazan in 1552 and begins a push south that runs for three hundred years.",
   "pop": "About 545 to 580 million people alive by 1600.",
   "src": "Sarwat Saulat, volume 3.",
   "inv": null,
   "zone": "z9"
  },
  {
   "id": "44",
   "num": "44",
   "side": "t",
   "sort": 1690,
   "dated": true,
   "yearLabel": "1600s to 1798",
   "ah": "11th and 12th centuries AH",
   "title": "The slow reversal",
   "map": "1700",
   "pins": [
    [
     "The second siege of Vienna fails, 1683",
     "Vienna",
     48.21,
     16.37
    ],
    [
     "Karlowitz, 1699: the first territory given back",
     "Sremski Karlovci, Serbia",
     45.2,
     19.93
    ],
    [
     "Plassey, 1757: a trading company takes Bengal",
     "Palashi, India",
     23.8,
     88.25
    ],
    [
     "Napoleon lands in Egypt, 1798",
     "Alexandria",
     31.2,
     29.92
    ]
   ],
   "story": "The Muslim empires stay enormous, but something has changed and the maps start showing it. Vienna holds in 1683. In 1699 the Ottomans sign away Hungary, the first time they have handed back real territory. Safavid Iran collapses. The Mughal empire decays after Aurangzeb, and an English trading company with its own private army wins a battle at Plassey in 1757 and finds itself collecting the taxes of Bengal. By 1800 that company governs more Indians than the emperor does. Russia annexes the Crimean Khanate in 1783, the first Muslim country taken by a European power in modern times. Then in 1798 Napoleon lands in Egypt with an army and a team of scientists, and the message is unmistakable: Europe can now walk into the heartland whenever it likes.",
   "meanwhile": "Newton publishes his laws in 1687. The Atlantic slave trade is at its height. America and France have their revolutions. Steam engines start turning in Britain, and the gap that will define the next two centuries begins to open.",
   "pop": "The world passes one billion people around 1804.",
   "src": "Sarwat Saulat, volumes 3 and 4.",
   "inv": null,
   "zone": "z9"
  },
  {
   "id": "45",
   "num": "45",
   "side": "t",
   "sort": 1860,
   "dated": true,
   "yearLabel": "1800s",
   "ah": "13th century AH",
   "title": "Colonisation",
   "map": "1880",
   "pins": [
    [
     "France takes Algeria, 1830",
     "Algiers",
     36.75,
     3.06
    ],
    [
     "1857: the last Mughal emperor is exiled",
     "Delhi",
     28.61,
     77.21
    ],
    [
     "The Suez Canal opens, 1869",
     "Suez, Egypt",
     30.59,
     32.27
    ],
    [
     "Britain occupies Egypt, 1882",
     "Cairo",
     30.04,
     31.24
    ],
    [
     "Russia takes Tashkent, 1865",
     "Tashkent, Uzbekistan",
     41.3,
     69.24
    ],
    [
     "Europe divides Africa at a conference, 1884",
     "Berlin",
     52.52,
     13.4
    ]
   ],
   "story": "Within one century almost the entire Muslim world comes under European control. France takes Algeria, then Tunisia, then Morocco. Britain rules India directly after crushing the 1857 uprising, and the last Mughal emperor, a poet in his eighties, is put on trial and exiled to Burma, where he dies. Britain occupies Egypt in 1882 because Egypt cannot pay debts it was encouraged to run up. Russia swallows Central Asia. The Dutch consolidate Indonesia. And in 1884 the powers of Europe sit down in Berlin with a map of Africa and divide it among themselves, without a single African in the room. Those borders are still there. The Ottomans try to modernise, declare all citizens equal regardless of religion, write a constitution, and build a railway to Madinah, but they are running out of time.",
   "meanwhile": "Railways, telegraphs and steamships shrink the world. London, with six and a half million people, is the largest city on earth, and for the first time in this entire timeline the biggest cities are in Europe.",
   "pop": "About 1.6 billion people alive by 1900.",
   "src": "Sarwat Saulat, volumes 4 and 5.",
   "inv": null,
   "zone": "z10"
  },
  {
   "id": "46",
   "num": "46",
   "side": "t",
   "sort": 1916,
   "dated": true,
   "yearLabel": "1914 to 1918",
   "ah": "Years 1332 to 1337",
   "title": "The last Ottoman war",
   "map": "1914",
   "pins": [
    [
     "Gallipoli, 1915",
     "Gelibolu, Turkey",
     40.41,
     26.67
    ],
    [
     "The Sykes-Picot lines, 1916",
     "Drawn across Syria and Iraq",
     34.0,
     38.0
    ],
    [
     "Jerusalem surrenders, December 1917",
     "Al-Quds",
     31.78,
     35.23
    ]
   ],
   "story": "The Ottomans entered the war on Germany's side and the caliph declared a holy war, and very little happened, because the age when that call could move armies was over. Gallipoli was their last great victory. Meanwhile Britain made three promises that could not all be kept: to the Arabs, independence in exchange for revolt; to France, a secret carve-up of the same land; and to the Zionist movement, a national home in Palestine. The Arab revolt took Aqaba and rode into Damascus. Jerusalem surrendered to a British general in December 1917. The empire signed an armistice in 1918, and the contradictions between those three promises are still being fought over today.",
   "meanwhile": null,
   "pop": null,
   "src": "Sarwat Saulat, volume 5.",
   "inv": null,
   "zone": "z11"
  },
  {
   "id": "47",
   "num": "47",
   "side": "t",
   "sort": 1924,
   "dated": true,
   "yearLabel": "3 March 1924",
   "ah": "Year 1342",
   "title": "The caliphate is abolished",
   "map": "1920",
   "pins": [
    [
     "The vote is taken in the new parliament",
     "Ankara, Turkey",
     39.93,
     32.86
    ],
    [
     "The last caliph leaves on the Orient Express",
     "Istanbul",
     41.01,
     28.98
    ],
    [
     "The Arab lands become mandates",
     "Damascus, Baghdad and Jerusalem",
     33.5,
     36.3
    ]
   ],
   "story": "Out of a lost war, Mustafa Kemal built a national movement, fought off invasion, and founded a republic. On 3 March 1924 the new parliament voted the caliphate out of existence. Abdulmejid II, the hundred and first man to hold an office founded the day after the Prophet died, was put on a train with a suitcase. After one thousand two hundred and ninety-two years, there was no caliph. In India, a mass movement of Muslims had campaigned to save the institution, and its collapse pushed a generation of them towards a different idea, which became Pakistan. Meanwhile the Arab lands were parcelled into mandates run from London and Paris, Ibn Saud consolidated Arabia into a kingdom, and the borders you see on the news tonight appeared on the map in this single frame.",
   "meanwhile": null,
   "pop": null,
   "src": "Sarwat Saulat, volume 5.",
   "inv": null,
   "zone": "z11"
  },
  {
   "id": "48",
   "num": "48",
   "side": "t",
   "sort": 1932,
   "dated": true,
   "yearLabel": "1924 to 1939",
   "ah": "Years 1343 to 1358",
   "title": "A world without a caliph",
   "map": "1930",
   "pins": [
    [
     "The Kingdom of Saudi Arabia, 1932",
     "Riyadh",
     24.71,
     46.68
    ],
    [
     "Oil is struck at Dammam, 1938",
     "Dammam, Saudi Arabia",
     26.43,
     50.1
    ],
    [
     "The Muslim Brotherhood is founded, 1928",
     "Ismailia, Egypt",
     30.6,
     32.27
    ],
    [
     "The idea of Pakistan",
     "Lahore",
     31.55,
     74.34
    ]
   ],
   "story": "The Muslim world reorganises itself around two competing answers. One is the religious movement, of which the Muslim Brotherhood, founded by a schoolteacher in 1928, is the template. The other is the nation-state, of which Pakistan, argued for by a poet in 1930 and demanded formally in 1940, is the template. Turkey secularises and changes its alphabet, cutting a generation off from its own libraries overnight. Iran modernises by decree. And in 1938 a drill at Dammam strikes oil in commercial quantities, which will do more to reshape the region's power than any of the political arguments.",
   "meanwhile": "The Depression breaks the world economy. Fascism rises in Europe. Japan invades China.",
   "pop": null,
   "src": "Sarwat Saulat, volume 5.",
   "inv": null,
   "zone": "z11"
  },
  {
   "id": "49",
   "num": "49",
   "side": "t",
   "sort": 1943,
   "dated": true,
   "yearLabel": "1939 to 1945",
   "ah": "Years 1358 to 1364",
   "title": "The Second World War, and the map of 1945",
   "map": "1938",
   "pins": [
    [
     "El Alamein, 1942",
     "El Alamein, Egypt",
     30.83,
     28.95
    ],
    [
     "Britain and Russia occupy Iran, 1941",
     "Tehran",
     35.69,
     51.39
    ],
    [
     "The United Nations is founded, 1945",
     "San Francisco",
     37.77,
     -122.42
    ]
   ],
   "story": "The deadliest event in human history. Muslim lands were battlefields and were also asked for men: two and a half million Indians volunteered, the largest volunteer army ever raised, and a great many of them were Muslims. North Africa was fought over. Iran was occupied by its supposed friends. In Europe, six million Jews were murdered in a system built for the purpose, and this site states that plainly and without qualification, because a history that flinches at that is not worth reading. The war ended with two superpowers standing, the European empires bankrupt, and a new organisation founded in San Francisco with Egypt, Iraq, Iran, Saudi Arabia, Syria, Lebanon and Turkey among its founding members. Within two years of the closing frame of this timeline, Pakistan and India are independent, and the age of empires is over.",
   "meanwhile": null,
   "pop": "About 2.3 billion people alive.",
   "src": "Sarwat Saulat, volume 5. HYDE and Our World in Data for population.",
   "inv": null,
   "zone": "z11"
  },
  {
   "side": "w",
   "sort": -9000,
   "dated": true,
   "yearLabel": "About 9000 BC",
   "ah": null,
   "title": "Farming begins, and everything changes",
   "map": "bc3000",
   "pins": [
    [
     "The Fertile Crescent, where wheat was first sown",
     "Northern Syria and Iraq",
     36.5,
     40.0
    ],
    [
     "Gobekli Tepe, built before farming",
     "Sanliurfa, Turkey",
     37.22,
     38.92
    ]
   ],
   "story": "For almost all of human existence, people followed food. Then, in a few places at roughly the same time and with no contact between them, they started planting it instead. Wheat and barley in the Middle East, rice in China, maize in Mexico, potatoes in the Andes. It is the most important thing humans have ever done. Once you farm you stay put, you store grain, you can feed far more children, and sooner or later somebody has to guard the store and somebody else has to be told what to do. Cities, kings, taxes, armies, writing and inequality all come out of this one change.",
   "meanwhile": "On the other rail: the undated generations between Adam and Noah. This is the world they would have lived in, and the archaeology is the only record of it we have.",
   "pop": null,
   "src": "World History Encyclopedia. McEvedy and Jones.",
   "inv": "Farming. Domesticated wheat, barley, rice and maize. Pottery. The granary. Permanent houses.",
   "id": "W1",
   "num": "W1",
   "zone": "z0"
  },
  {
   "side": "w",
   "sort": -3300,
   "dated": true,
   "yearLabel": "About 3500 to 3000 BC",
   "ah": null,
   "title": "Sumer and Egypt: writing and the first cities",
   "map": "bc3000",
   "pins": [
    [
     "Uruk, possibly the first city on earth",
     "Warka, Iraq",
     31.32,
     45.64
    ],
    [
     "Egypt is unified under one crown",
     "The Nile valley",
     26.0,
     32.0
    ]
   ],
   "story": "History begins as bookkeeping. The first writing in the world is not poetry or scripture but receipts: so many sacks of barley, delivered by so-and-so. Uruk in southern Iraq may be the first real city anywhere, a place where thousands of strangers lived together and had to invent rules for doing so. Around 3100 BC Egypt is unified under a single king, and stays recognisably itself for three thousand years, which is longer than the time between Cleopatra and us.",
   "meanwhile": "On the other rail: the undated era between Adam and Noah. Tradition remembers Enoch as the first man to write with a pen, and this is the moment when writing actually appears.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Cuneiform writing. The wheel. The plough. Bronze. The sail. Irrigation. The sixty-minute hour.",
   "id": "W2",
   "num": "W2",
   "zone": "z1"
  },
  {
   "side": "w",
   "sort": -2560,
   "dated": true,
   "yearLabel": "About 2560 BC",
   "ah": null,
   "title": "The Great Pyramid",
   "map": "bc3000",
   "pins": [
    [
     "The pyramid of Khufu",
     "Giza, Egypt",
     29.98,
     31.13
    ]
   ],
   "story": "It is the heaviest building humans have ever put up, and it was the tallest structure in the world for three thousand eight hundred years, until a cathedral spire in England beat it in 1311. It was not built by slaves. The workers' village has been excavated, and they were paid in bread and beer, they had doctors, and the ones who died were buried with honour in the shadow of the thing they built. The myth that Israelite slaves built the pyramids is off by more than a thousand years.",
   "meanwhile": "On the other rail: still the undated era, before Abraham.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Precision stone cutting. Surveying. Large-scale project management and payroll.",
   "id": "W3",
   "num": "W3",
   "zone": "z1"
  },
  {
   "side": "w",
   "sort": -2300,
   "dated": true,
   "yearLabel": "About 2600 to 1900 BC",
   "ah": null,
   "title": "The Indus cities",
   "map": "bc2000",
   "pins": [
    [
     "Mohenjo-daro",
     "Sindh, Pakistan",
     27.33,
     68.14
    ],
    [
     "Harappa",
     "Punjab, Pakistan",
     30.63,
     72.87
    ]
   ],
   "story": "Streets laid out on a grid. Bricks made to a standard size across hundreds of miles. Almost every house connected to a covered drain, which is a level of public sanitation that Europe would not match for four thousand years. No obvious palaces, no obvious temples, and no obvious kings, which is strange and interesting. And a written script that nobody has ever been able to read, so their thoughts are lost. Around 1900 BC the cities are quietly abandoned, and we still do not know why.",
   "meanwhile": "On the other rail: Abraham. While he is travelling from Iraq to Palestine to Arabia, these cities are already ancient and beginning to fade.",
   "pop": null,
   "src": "World History Encyclopedia. McEvedy and Jones.",
   "inv": "Standardised weights and bricks. Covered sewers and household drains. Urban grid planning. Dentistry.",
   "id": "W4",
   "num": "W4",
   "zone": "z1"
  },
  {
   "side": "w",
   "sort": -1770,
   "dated": true,
   "yearLabel": "About 1792 to 1750 BC",
   "ah": null,
   "title": "Hammurabi's law code",
   "map": "bc2000",
   "pins": [
    [
     "The stone pillar of laws",
     "Babylon, Iraq",
     32.54,
     44.42
    ]
   ],
   "story": "Two hundred and eighty-two rulings carved onto a black stone pillar and set up in public so that, in the king's words, the strong should not harm the weak. It is not a fair document by our standards, because the punishment depends on the class of the victim, and a nobleman's broken bone costs more than a commoner's. But it is written down, it applies to everyone, and it is displayed where people can read it, and those three things are the seed of every legal system since.",
   "meanwhile": "On the other rail: Joseph, who rises to run Egypt's grain stores in roughly this era. Two ways of organising a state, law and administration, appearing in the same century.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "A published legal code. Fixed penalties. The idea that law stands above individual judgement.",
   "id": "W5",
   "num": "W5",
   "zone": "z2"
  },
  {
   "side": "w",
   "sort": -1200,
   "dated": true,
   "yearLabel": "About 1200 to 1150 BC",
   "ah": null,
   "title": "The Bronze Age collapse",
   "map": "bc1000",
   "pins": [
    [
     "Mycenae burns",
     "Greece",
     37.73,
     22.76
    ],
    [
     "The Hittite capital is abandoned",
     "Hattusa, Turkey",
     40.02,
     34.62
    ]
   ],
   "story": "In roughly fifty years, an entire interconnected world fell apart. Mycenae burned. The Hittite empire vanished. Egypt barely fought off invaders it called the Sea Peoples and never fully recovered. Trade routes closed, palaces fell, and in Greece even the ability to write was lost for four hundred years. Historians still argue about the cause, and the best answer is probably that it was several at once: drought, migration, earthquake and the failure of a trading system that had become too dependent on itself. It is the closest thing in ancient history to a warning about complex systems.",
   "meanwhile": "On the other rail: Moses. The Exodus belongs to roughly this period, and within a few decades of it the world these events happened in simply stops existing.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": null,
   "id": "W6",
   "num": "W6",
   "zone": "z3"
  },
  {
   "side": "w",
   "sort": -880,
   "dated": true,
   "yearLabel": "911 to 609 BC",
   "ah": null,
   "title": "Assyria",
   "map": "bc700",
   "pins": [
    [
     "Nineveh, and the library of Ashurbanipal",
     "Mosul, Iraq",
     36.36,
     43.15
    ]
   ],
   "story": "The first empire that really worked: provinces with governors, a standing professional army, roads, siege engineers who could take any city, and a deliberate policy of deporting entire populations so they would never rebel again. The Assyrians were proud of their cruelty and carved it on their palace walls as a warning. They also built the greatest library of the ancient world, which is where we get the Epic of Gilgamesh. In 612 BC the Babylonians and Medes destroyed Nineveh so completely that Greek travellers two centuries later did not know a city had been there.",
   "meanwhile": "On the other rail: Jonah, who was sent to Nineveh, the capital of this empire, and whose city repented and was spared.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Siege towers and battering rams. Imperial roads and a relay post. Systematic record-keeping in a royal library.",
   "id": "W7",
   "num": "W7",
   "zone": "z3"
  },
  {
   "side": "w",
   "sort": -586,
   "dated": true,
   "yearLabel": "586 BC",
   "ah": null,
   "title": "Babylon destroys the Temple",
   "map": "bc500",
   "pins": [
    [
     "Babylon at its height",
     "Babylon, Iraq",
     32.54,
     44.42
    ],
    [
     "The Temple is burned and the people deported",
     "Jerusalem",
     31.78,
     35.23
    ]
   ],
   "story": "Nebuchadnezzar took Jerusalem, burned Solomon's Temple, and marched the people of Judah to Babylon. The exile that followed is one of the most productive catastrophes in history: cut off from their land and their Temple, the exiles wrote, edited and preserved their scriptures, and a religion that had been tied to a place became one that could survive anywhere. Babylon itself, with its blue-tiled gate and its astronomers keeping nightly records of the sky, was probably the most impressive city on earth.",
   "meanwhile": "On the other rail: the era of the later prophets of Israel. Daniel, honoured in Islamic tradition too, was among the exiles.",
   "pop": null,
   "src": "World History Encyclopedia. Quran 17:4-7.",
   "inv": "Systematic astronomy. Nightly sky records kept for centuries, which is the raw data all later astronomy is built on.",
   "id": "W8",
   "num": "W8",
   "zone": "z3"
  },
  {
   "side": "w",
   "sort": -550,
   "dated": true,
   "yearLabel": "550 to 330 BC",
   "ah": null,
   "title": "Cyrus and the Persian empire",
   "map": "bc500",
   "pins": [
    [
     "Cyrus's capital",
     "Pasargadae, Iran",
     30.2,
     53.17
    ],
    [
     "Persepolis",
     "Fars, Iran",
     29.93,
     52.89
    ]
   ],
   "story": "The first empire to stretch across three continents, run through provincial governors and held together by a road you could ride from Turkey to Iran in a week. What made it unusual was the policy: Cyrus let conquered peoples keep their gods, their customs and their laws, and he sent the exiled Judeans home to rebuild their Temple. The clay cylinder recording his conquest of Babylon is sometimes oversold as the first charter of human rights, which it is not, but the tolerance behind it was real and it was rare.",
   "meanwhile": "On the other rail: Dhul-Qarnayn. Many later Muslim scholars have argued that this just and travelling king is the man the Quran describes without naming. Alexander, further along this rail, is the older candidate. Both are here for you to weigh.",
   "pop": null,
   "src": "World History Encyclopedia. Quran 18:83-98.",
   "inv": "The imperial road and relay post. Standardised coinage across an empire. Underground irrigation channels called qanats, still in use in Iran.",
   "id": "W9",
   "num": "W9",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -520,
   "dated": true,
   "yearLabel": "About 600 to 450 BC",
   "ah": null,
   "title": "The age of thinkers",
   "map": "bc500",
   "pins": [
    [
     "The Buddha",
     "Bodh Gaya, India",
     24.7,
     84.99
    ],
    [
     "Confucius",
     "Qufu, China",
     35.6,
     116.99
    ],
    [
     "The first Greek philosophers",
     "Miletus and Athens",
     37.53,
     27.28
    ]
   ],
   "story": "Within a few generations, and with no contact between them, human beings in India, China, Persia and Greece all started asking the same kind of question: not how do I please the gods, but how should a person live. The Buddha, Confucius, Laozi, Zoroaster and the first Greek philosophers all belong to this window. Nobody has a fully convincing explanation for why it happened when it did. Almost every ethical system alive today traces back to this moment.",
   "meanwhile": "On the other rail: the long stretch between the prophets of Israel and Jesus. The Quran says that no community was left without a warner, which is the frame worth holding while reading this entry.",
   "pop": null,
   "src": "World History Encyclopedia. Quran 35:24.",
   "inv": null,
   "id": "W10",
   "num": "W10",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -450,
   "dated": true,
   "yearLabel": "508 to 322 BC",
   "ah": null,
   "title": "Classical Greece",
   "map": "bc500",
   "pins": [
    [
     "Athens",
     "Athens, Greece",
     37.98,
     23.73
    ]
   ],
   "story": "Athens invented democracy and excluded women, slaves and foreigners from it, so roughly one adult in five could vote. Hold both those facts at once. In the space of two centuries this one small city produced Socrates, who was executed by that same democracy for asking awkward questions, and then Plato and Aristotle, and the beginnings of history, drama, medicine and formal logic. Almost all of it was later lost to Europe and preserved in Arabic, and it came back to the West through translations made in Baghdad, Cordoba and Toledo.",
   "meanwhile": "On the other rail: this library is exactly what the House of Wisdom in Baghdad will translate, argue with and improve upon a thousand years later.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Formal logic. Geometry as proof. The beginnings of medicine as observation rather than magic. The Antikythera mechanism, a geared bronze computer for predicting eclipses.",
   "id": "W11",
   "num": "W11",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -330,
   "dated": true,
   "yearLabel": "336 to 323 BC",
   "ah": null,
   "title": "Alexander",
   "map": "bc323",
   "pins": [
    [
     "From Macedon to the Indus",
     "Pella, Greece",
     40.76,
     22.52
    ],
    [
     "Alexandria founded, 331 BC",
     "Alexandria, Egypt",
     31.2,
     29.92
    ]
   ],
   "story": "He was twenty when he inherited an army and thirty-two when he died, and in between he destroyed the Persian empire and marched to the edge of India. He founded around seventy cities and named an alarming number of them after himself. Greek became the common language from Egypt to Afghanistan, which is why the New Testament was written in it. His empire fell apart the moment he died, but the mixing of Greek, Persian, Egyptian and Indian ideas that he set off lasted for centuries.",
   "meanwhile": "On the other rail: Dhul-Qarnayn again. Classical commentators often identified Alexander as the king in that story, though many later scholars objected on the grounds that he was a pagan who claimed to be a god.",
   "pop": null,
   "src": "World History Encyclopedia. Ibn Kathir, al-Bidayah wan-Nihayah.",
   "inv": null,
   "id": "W12",
   "num": "W12",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -250,
   "dated": true,
   "yearLabel": "268 to 232 BC",
   "ah": null,
   "title": "Ashoka's remorse",
   "map": "bc200",
   "pins": [
    [
     "Edicts carved on rock and pillar",
     "Patna, India",
     25.61,
     85.14
    ]
   ],
   "story": "He conquered the kingdom of Kalinga and, by his own account, a hundred thousand people died. Then he did something no other ancient ruler ever did: he said publicly that he was sorry. He converted to Buddhism, renounced war, and had his regret carved onto rocks and pillars across the subcontinent, along with orders to plant shade trees, dig wells, build hospitals for people and for animals, and respect other faiths. Some of those pillars are still standing where he put them. Modern India took his lion capital as its national emblem.",
   "meanwhile": "On the other rail: the long undated gap. The Quran's statement that every community received a warner is the honest frame for an age like this.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Public health infrastructure as state policy. Wells, roads with shade trees, and hospitals treating animals as well as people.",
   "id": "W13",
   "num": "W13",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -210,
   "dated": true,
   "yearLabel": "221 BC to 220 CE",
   "ah": null,
   "title": "China is unified: Qin and Han",
   "map": "bc200",
   "pins": [
    [
     "The First Emperor's capital",
     "Xi'an, China",
     34.34,
     108.94
    ],
    [
     "The Silk Road opens westward",
     "Dunhuang, China",
     40.14,
     94.66
    ]
   ],
   "story": "The First Emperor unified China by force and then standardised everything: the writing, the weights, the coins, even the width of cart axles, so that a cart made anywhere could use the ruts everywhere. He also buried scholars alive and burned books he disliked. He was buried with eight thousand life-sized clay soldiers to guard him. The Han dynasty that followed invented paper, opened the Silk Road, and staffed its government by examination, which meant that in principle a clever farmer's son could rise. China has been a single idea ever since, which is the real achievement.",
   "meanwhile": "On the other rail: this runs right up to the time of Jesus. Han China and Rome are the two superpowers of that moment, at either end of a road made of silk, and each only half believes the other exists.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Paper, about 105 CE. The seismograph. The wheelbarrow. The horse collar. The civil service examination.",
   "id": "W14",
   "num": "W14",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": -100,
   "dated": true,
   "yearLabel": "264 to 27 BC",
   "ah": null,
   "title": "Rome rises",
   "map": "bc1",
   "pins": [
    [
     "Rome",
     "Rome, Italy",
     41.89,
     12.48
    ],
    [
     "Carthage is destroyed, 146 BC",
     "Tunis, Tunisia",
     36.85,
     10.32
    ]
   ],
   "story": "Rome fought Carthage three times and lost most of the battles of the second war, including to Hannibal, who crossed the Alps with elephants and spent fifteen years wandering around Italy beating Roman armies. Rome won anyway, because it could replace its dead and Carthage could not. Then it destroyed Carthage completely. Having conquered the Mediterranean, the republic turned on itself, and after a century of civil war Augustus ended it and became emperor in 27 BC while insisting he had restored the republic.",
   "meanwhile": "On the other rail: Jesus is born into the empire this entry creates, in an occupied province, under a governor appointed from Rome.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Concrete that sets under water. Aqueducts, sewers and paved roads. Roman law, which is the ancestor of most legal systems in Europe and Latin America.",
   "id": "W15",
   "num": "W15",
   "zone": "z4"
  },
  {
   "side": "w",
   "sort": 380,
   "dated": true,
   "yearLabel": "312 to 476 CE",
   "ah": null,
   "title": "Rome becomes Christian, then falls",
   "map": "400",
   "pins": [
    [
     "Constantinople is founded, 330",
     "Istanbul",
     41.01,
     28.98
    ],
    [
     "The council of Nicaea, 325",
     "Iznik, Turkey",
     40.43,
     29.72
    ],
    [
     "The western empire ends, 476",
     "Rome",
     41.89,
     12.48
    ]
   ],
   "story": "Constantine made Christianity legal and then called a council of bishops at Nicaea to settle what Christians actually believed, which fixed the doctrine of the trinity by a vote. Within seventy years it was the official religion of the empire and the old temples were closing. Then the western half of the empire came apart under pressure from migrating peoples, and in 476 the last western emperor was deposed by a general who did not bother to replace him. The eastern half, which we call Byzantium, carried on from Constantinople for another thousand years.",
   "meanwhile": "On the other rail: this is the heart of the long gap between Jesus and Muhammad, and the Sleepers in the Cave fall asleep in the pagan empire and wake in the Christian one.",
   "pop": null,
   "src": "World History Encyclopedia. Quran 4:171.",
   "inv": null,
   "id": "W16",
   "num": "W16",
   "zone": "z5"
  },
  {
   "side": "w",
   "sort": 430,
   "dated": true,
   "yearLabel": "About 320 to 550 CE",
   "ah": null,
   "title": "Gupta India: the number zero",
   "map": "400",
   "pins": [
    [
     "Mathematicians and astronomers",
     "Patna, India",
     25.61,
     85.14
    ],
    [
     "Nalanda university",
     "Bihar, India",
     25.14,
     85.44
    ]
   ],
   "story": "Indian mathematicians did something that sounds small and is not: they treated nothing as a number. Zero as a digit, with a place-value system behind it, makes arithmetic easy, and easy arithmetic makes science, accounting and eventually computing possible. Aryabhata calculated the value of pi and argued that the earth rotates. Nalanda, a university with thousands of students and a library said to have burned for months when it was destroyed, drew scholars from China and Korea.",
   "meanwhile": "On the other rail: the long gap. These numerals travel to Baghdad, get written up by al-Khwarizmi, and reach Europe under the name Arabic numerals. Look at the digits you are reading right now.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Zero as a number. The decimal place-value system. The calculation of pi to four places. The rotation of the earth, proposed and defended.",
   "id": "W17",
   "num": "W17",
   "zone": "z5"
  },
  {
   "side": "w",
   "sort": 550,
   "dated": true,
   "yearLabel": "330 to 1453 CE",
   "ah": null,
   "title": "Byzantium: the Roman empire that would not die",
   "map": "600",
   "pins": [
    [
     "Constantinople",
     "Istanbul, Turkey",
     41.01,
     28.98
    ],
    [
     "Hagia Sophia, completed 537",
     "Istanbul",
     41.008,
     28.98
    ]
   ],
   "story": "The eastern Roman empire outlived the west by a thousand years and we barely teach it. Its people called themselves Romans to the end. It preserved Greek literature, codified Roman law into the form that Europe would later copy, built Hagia Sophia, which had the largest dome in the world for nearly a millennium, and held the walls of Constantinople against every attacker until gunpowder. It also had a secret weapon, a liquid fire that burned on water, and the recipe was so closely guarded that it is lost.",
   "meanwhile": "On the other rail: this is the empire fighting Persia to exhaustion just as Muhammad begins preaching, and the empire whose Syrian and Egyptian provinces fall within a decade of his death.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Greek fire. The codification of Roman law under Justinian. The pendentive dome, which made Hagia Sophia possible.",
   "id": "W18",
   "num": "W18",
   "zone": "z5"
  },
  {
   "side": "w",
   "sort": 600,
   "dated": true,
   "yearLabel": "602 to 628 CE",
   "ah": null,
   "title": "The last great war of antiquity",
   "map": "600",
   "pins": [
    [
     "Constantinople is nearly taken",
     "Istanbul",
     41.01,
     28.98
    ],
    [
     "Persia's capital",
     "Ctesiphon, Iraq",
     33.09,
     44.58
    ]
   ],
   "story": "Byzantium and Persia fought for twenty-six years, which is the longest war of the ancient world. Persia took Syria, Jerusalem and Egypt and stood across the water from Constantinople. Then Heraclius, in a campaign that should be more famous than it is, marched around behind them and destroyed the Persian army at Nineveh in 627. He won everything back. And it destroyed both empires anyway. They had spent their money, their grain and their young men, and neither could hold a frontier afterwards.",
   "meanwhile": "On the other rail: this is the exact backdrop to the entire life of Muhammad. The Quran comments on this war while it is still being fought, saying Rome will recover, at a moment when that looked absurd.",
   "pop": null,
   "src": "World History Encyclopedia. Quran 30:1-5.",
   "inv": null,
   "id": "W19",
   "num": "W19",
   "zone": "z6"
  },
  {
   "side": "w",
   "sort": 700,
   "dated": true,
   "yearLabel": "618 to 907 CE",
   "ah": null,
   "title": "Tang China",
   "map": "700",
   "pins": [
    [
     "Chang'an, a city of a million people",
     "Xi'an, China",
     34.34,
     108.94
    ],
    [
     "Muslim merchants settle in Canton",
     "Guangzhou",
     23.13,
     113.26
    ]
   ],
   "story": "Founded four years before the migration to Madinah, and for a while the most cosmopolitan place on earth. Chang'an had perhaps a million people and streets where you could find Buddhist temples, Christian churches, Zoroastrian fire temples and, within a century, mosques. Persian merchants, Korean students and Japanese diplomats all lived there. Tang China and the caliphate exchanged embassies. Muslim traders reached the Chinese coast by sea within a generation of the Prophet's death, and their descendants are still there.",
   "meanwhile": "On the other rail: the caliphates. The two civilisations meet at Talas in 751, and the paper-making that follows changes the Muslim world completely.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volume 2.",
   "inv": "Woodblock printing. Porcelain. Gunpowder, first recorded by alchemists looking for immortality. The mechanical clock escapement.",
   "id": "W20",
   "num": "W20",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 900,
   "dated": true,
   "yearLabel": "793 to 1066 CE",
   "ah": null,
   "title": "The Vikings",
   "map": "900",
   "pins": [
    [
     "Lindisfarne is raided, 793",
     "Northumbria, England",
     55.68,
     -1.8
    ],
    [
     "Rowing the Volga to trade for silver",
     "The Volga route, Russia",
     56.0,
     44.0
    ],
    [
     "Reaching America around 1000",
     "Newfoundland, Canada",
     51.6,
     -55.5
    ]
   ],
   "story": "They are remembered as raiders and they were, but they were also traders, settlers and state-builders. They founded Dublin, settled Normandy, took England, colonised Iceland and Greenland, and reached North America around the year 1000, five centuries before Columbus, and then went home and largely forgot about it. And they rowed down the Russian rivers to sell furs and slaves to the Muslim world, which is why Swedish farmers still occasionally dig up Baghdad silver coins in their fields. An Arab diplomat named Ibn Fadlan met them on the Volga in 922 and wrote down exactly what he saw, and his account is the best eyewitness description of them that exists.",
   "meanwhile": "On the other rail: the Abbasid golden age. The silver in those Swedish fields was minted in Baghdad. It is the two rails of this timeline physically touching.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volume 2.",
   "inv": "The longship, shallow enough for rivers and seaworthy enough for the Atlantic. Sun compasses and remarkable open-sea navigation.",
   "id": "W21",
   "num": "W21",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 1000,
   "dated": true,
   "yearLabel": "710 to 1600 CE",
   "ah": null,
   "title": "Japan",
   "map": "1000",
   "pins": [
    [
     "The first permanent capital, 710",
     "Nara, Japan",
     34.69,
     135.83
    ],
    [
     "The imperial court at Heian",
     "Kyoto, Japan",
     35.01,
     135.77
    ]
   ],
   "story": "Japan borrowed Chinese writing, Buddhism and city planning, and then made something entirely its own out of them. Around the year 1000, a woman at the imperial court named Murasaki Shikibu wrote The Tale of Genji, which many people consider the first novel ever written anywhere. Then real power drifted from the emperor to warlords and their armed retainers, the samurai, and Japan spent centuries in civil war before being unified and then deliberately closing itself off from the world for two hundred years.",
   "meanwhile": "On the other rail: the golden age of Baghdad and Cordoba is happening at the same time as the Heian court, and neither has the faintest idea the other exists.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Folded steel swordmaking of extraordinary quality. Woodblock printing. The novel, arguably.",
   "id": "W22",
   "num": "W22",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 1100,
   "dated": true,
   "yearLabel": "1050 to 1350 CE",
   "ah": null,
   "title": "Cahokia, the city in North America",
   "map": "1200",
   "pins": [
    [
     "Cahokia, near modern St Louis",
     "Illinois, United States",
     38.66,
     -90.06
    ]
   ],
   "story": "There was a city in North America. Cahokia, on the Mississippi, had perhaps twenty thousand people at its height, which made it bigger than London at the same date, and it was built around an earthen pyramid with a larger base than the Great Pyramid of Giza. It had suburbs, a plaza, and a ring of wooden posts used to track the sun. It was abandoned before any European ever saw it, and for a long time white settlers refused to believe that the people they found living there could possibly have built it.",
   "meanwhile": "On the other rail: the Crusades and Saladin. Nobody in Jerusalem or Baghdad knew this place existed, and nobody in Cahokia knew about them.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": null,
   "id": "W23",
   "num": "W23",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 1150,
   "dated": true,
   "yearLabel": "802 to 1431 CE",
   "ah": null,
   "title": "Angkor and maritime Southeast Asia",
   "map": "1200",
   "pins": [
    [
     "Angkor Wat",
     "Siem Reap, Cambodia",
     13.41,
     103.87
    ],
    [
     "Srivijaya, a trading empire of the seas",
     "Palembang, Indonesia",
     -2.99,
     104.76
    ]
   ],
   "story": "Angkor was the largest pre-industrial city in the world, spread over an area the size of modern Los Angeles, and it was fed by an enormous system of reservoirs and canals that eventually failed. Angkor Wat is the biggest religious building on earth. Out in the islands, the trading states of Srivijaya and later Majapahit controlled the straits that all Indian Ocean trade had to pass through, and it was through those same trade routes, carried by merchants rather than armies, that Islam arrived and made Indonesia what is today the largest Muslim country in the world.",
   "meanwhile": "On the other rail: Islam reaching Southeast Asia peacefully by trade, which is how the largest Muslim population on earth came to be Muslim.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Hydraulic engineering on a vast scale: reservoirs, canals and irrigation supporting perhaps three quarters of a million people.",
   "id": "W24",
   "num": "W24",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 1180,
   "dated": true,
   "yearLabel": "960 to 1279 CE",
   "ah": null,
   "title": "Song China invents the modern world",
   "map": "1100",
   "pins": [
    [
     "Kaifeng, a city of a million",
     "Kaifeng, China",
     34.8,
     114.31
    ],
    [
     "Hangzhou",
     "Hangzhou, China",
     30.27,
     120.15
    ]
   ],
   "story": "Printing with movable type, four hundred years before Gutenberg. Paper money, issued by the government. The magnetic compass, used for navigation. Gunpowder weapons. Iron production that Britain would not match until about 1700. A civil service chosen by written examination. Restaurants, paper, coal-fired industry and a genuinely urban culture. Historians reasonably ask why the industrial revolution did not happen here, and nobody has a fully satisfying answer.",
   "meanwhile": "On the other rail: this is the same period as the House of Wisdom and Cordoba. The two most advanced civilisations on the planet at this moment are the Muslim world and Song China, and Europe is the periphery of both.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Movable type. Paper money. The mariner's compass. Gunpowder weapons. Blast furnaces. Locks on canals.",
   "id": "W25",
   "num": "W25",
   "zone": "z7"
  },
  {
   "side": "w",
   "sort": 1200,
   "dated": true,
   "yearLabel": "About 1000 to 1300 CE",
   "ah": null,
   "title": "The Polynesians find every island in the Pacific",
   "map": "1200",
   "pins": [
    [
     "Hawaii",
     "Hawaii, United States",
     19.9,
     -155.58
    ],
    [
     "Aotearoa, New Zealand",
     "New Zealand",
     -41.29,
     174.78
    ],
    [
     "Rapa Nui, Easter Island",
     "Chile",
     -27.12,
     -109.37
    ]
   ],
   "story": "Without metal, without writing and without any instrument at all, Polynesian navigators crossed the largest ocean on earth in double-hulled canoes and found nearly every habitable island in it. They read swells, stars, birds and the colour of clouds over unseen land. They sailed against the prevailing wind, deliberately, so they could get home if they found nothing. It is one of the greatest feats of navigation in human history and it was achieved by people that European explorers, arriving centuries later with charts and compasses, called primitive.",
   "meanwhile": "On the other rail: the Mongol century. While the largest land empire in history is being assembled, the largest ocean on earth is being settled by people in canoes.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Deep-ocean navigation by stars, swell and bird flight. The double-hulled voyaging canoe. Stellar compasses memorised rather than written.",
   "id": "W26",
   "num": "W26",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1220,
   "dated": true,
   "yearLabel": "1206 to 1260 CE",
   "ah": null,
   "title": "Genghis Khan and the Mongol empire",
   "map": "1279",
   "pins": [
    [
     "Genghis Khan is proclaimed, 1206",
     "Mongolia",
     47.92,
     106.92
    ],
    [
     "Bukhara and Samarkand destroyed, 1220",
     "Uzbekistan",
     39.65,
     66.96
    ],
    [
     "The empire reaches Hungary, 1241",
     "Hungary",
     47.5,
     19.04
    ]
   ],
   "story": "A boy from a broken family on the steppe united the Mongol tribes and then conquered more of the earth than anyone before or since. His empire ran from Korea to Hungary. His methods were terror as policy: cities that surrendered were taxed, cities that resisted were annihilated, and he made sure everyone knew the difference. Merv, Nishapur and Bukhara were destroyed with a thoroughness that scholars of the period still find hard to write about. And yet the same empire guaranteed religious freedom by law, ran a postal relay system across a continent, protected merchants, and made it possible to travel from Europe to China in safety for the first time in history. Both of those things are true and neither cancels the other.",
   "meanwhile": "On the other rail: his grandson sacks Baghdad in 1258 and ends the caliphate there. Then, within two generations, his descendants in Iran and Russia become Muslims themselves.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volume 2.",
   "inv": "The composite bow used from horseback at the gallop. A continental relay post. Religious tolerance written into law.",
   "id": "W27",
   "num": "W27",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1250,
   "dated": true,
   "yearLabel": "About 300 to 1600 CE",
   "ah": null,
   "title": "Africa's kingdoms",
   "map": "1400",
   "pins": [
    [
     "Aksum, an empire that minted its own coins",
     "Axum, Ethiopia",
     14.13,
     38.72
    ],
    [
     "Great Zimbabwe, built in stone without mortar",
     "Masvingo, Zimbabwe",
     -20.27,
     30.93
    ],
    [
     "Benin City and its bronzes",
     "Benin City, Nigeria",
     6.34,
     5.62
    ],
    [
     "Timbuktu and its libraries",
     "Timbuktu, Mali",
     16.77,
     -3.01
    ]
   ],
   "story": "Africa below the Sahara was not empty and it was not without history, whatever nineteenth-century Europeans decided to claim. Aksum in Ethiopia minted its own coinage and was ranked by a Persian writer among the four great powers of the world. Great Zimbabwe was built of dry stone walls, without mortar, so well made that when Europeans found the ruins they invented elaborate theories about who else could have built them. Benin City had walls and earthworks longer than the Great Wall of China, and its bronze casting is as fine as anything made in Renaissance Italy. Timbuktu had a university and a book trade, and tens of thousands of its manuscripts survive today.",
   "meanwhile": "On the other rail: Mansa Musa's pilgrimage in 1324, and the spread of Islam across West Africa and the Swahili coast by trade rather than conquest.",
   "pop": null,
   "src": "UNESCO General History of Africa. World History Encyclopedia.",
   "inv": "Dry-stone architecture at Great Zimbabwe. Lost-wax bronze casting at Ife and Benin. Sub-Saharan iron smelting, developed independently.",
   "id": "W28",
   "num": "W28",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1348,
   "dated": true,
   "yearLabel": "1347 to 1351",
   "ah": null,
   "title": "The Black Death",
   "map": "1400",
   "pins": [
    [
     "It arrives at Caffa and moves west",
     "Feodosia, Crimea",
     45.03,
     35.38
    ],
    [
     "Cairo loses a third of its people",
     "Cairo, Egypt",
     30.04,
     31.24
    ]
   ],
   "story": "It travelled the trade roads that the Mongol peace had opened, and in four years it killed perhaps a third of everybody from China to England. Whole villages disappeared. In some cities the dead could not be buried fast enough. It did not care about religion or wealth. And it had one consequence nobody intended: with so many workers dead, the survivors could demand better wages, and the rigid social order of medieval Europe never fully recovered its grip. It is the grimmest possible lesson in economics.",
   "meanwhile": "On the other rail: it hits the Muslim world just as hard. Ibn Battuta was travelling through it and describes it. Cairo, one of the greatest cities on earth, lost a third of its population.",
   "pop": null,
   "src": "World History Encyclopedia. McEvedy and Jones.",
   "inv": null,
   "id": "W29",
   "num": "W29",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1410,
   "dated": true,
   "yearLabel": "1368 to 1433 CE",
   "ah": null,
   "title": "Ming China and the treasure fleets",
   "map": "1400",
   "pins": [
    [
     "The fleets sail from here",
     "Nanjing, China",
     32.06,
     118.8
    ],
    [
     "They reach East Africa",
     "Malindi, Kenya",
     -3.22,
     40.12
    ]
   ],
   "story": "Between 1405 and 1433 China sent seven enormous fleets across the Indian Ocean, commanded by Zheng He, a Muslim eunuch admiral from Yunnan. The largest ships were several times the size of anything Columbus would sail sixty years later, and the fleets carried tens of thousands of men. They reached India, Arabia and the coast of Kenya, and brought a giraffe back to the emperor. And then China simply stopped. The court decided the voyages were an extravagance, the records were suppressed, and the ships were left to rot. It is one of history's great what-ifs, because sixty years later small European ships arrived in the same waters and found nobody defending them.",
   "meanwhile": "On the other rail: this happens between the fall of Constantinople and the Portuguese arrival in the Indian Ocean. For a moment, the largest navy on earth was Chinese and its admiral was a Muslim.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Ocean-going ships with watertight compartments and stern-post rudders. Fleet-scale navigation and logistics.",
   "id": "W30",
   "num": "W30",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1440,
   "dated": true,
   "yearLabel": "1325 to 1533",
   "ah": null,
   "title": "The Aztecs and the Inca",
   "map": "1492",
   "pins": [
    [
     "Tenochtitlan, a city built on a lake",
     "Mexico City",
     19.43,
     -99.13
    ],
    [
     "Cusco and a road network of 40,000 km",
     "Cusco, Peru",
     -13.53,
     -71.97
    ]
   ],
   "story": "Tenochtitlan was built on an island in a lake, connected to the shore by causeways, fed by floating gardens, and home to perhaps two hundred thousand people, which made it larger than any city in Europe. The Spanish who saw it said it was like a dream. The Inca ran an empire of ten million people down the spine of the Andes with a road network of forty thousand kilometres, and they did it without writing, without the wheel and without money, keeping their records on knotted strings. Both empires fell within about fifteen years to small Spanish forces, and the real killer was not the sword but smallpox, which arrived ahead of the armies.",
   "meanwhile": "On the other rail: 1492. Granada falls and Columbus sails in the same year, and the map of this timeline gains a hemisphere.",
   "pop": null,
   "src": "World History Encyclopedia. McEvedy and Jones.",
   "inv": "Floating agricultural gardens feeding a city of 200,000. Andean road engineering and suspension bridges. Freeze-drying of food. Knotted-string record keeping.",
   "id": "W31",
   "num": "W31",
   "zone": "z8"
  },
  {
   "side": "w",
   "sort": 1475,
   "dated": true,
   "yearLabel": "1440 to 1543",
   "ah": null,
   "title": "The printing press and the Renaissance",
   "map": "1492",
   "pins": [
    [
     "Gutenberg prints, about 1450",
     "Mainz, Germany",
     50.0,
     8.27
    ],
    [
     "Copernicus moves the earth, 1543",
     "Frombork, Poland",
     54.36,
     19.68
    ]
   ],
   "story": "Gutenberg's press was not the first printing in the world, since China and Korea had been printing for centuries, but it was the one that arrived at the right moment. Books became cheap in Europe exactly as Greek manuscripts were arriving from a collapsing Constantinople and as Arabic science was being translated in Spain. Within fifty years there were millions of printed books in Europe where there had been tens of thousands of hand-copied ones. It made the Reformation possible, and the scientific revolution, and eventually the newspaper and the pamphlet and the argument you are reading now.",
   "meanwhile": "On the other rail: the Ottomans restricted printing in Arabic script until the 1720s, largely to protect the scribes' guild and the authority of religious scholars. It is an honest and painful comparison to make, and this site makes it.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Movable metal type in Europe. Cheap paper books. The scientific journal follows within two centuries.",
   "id": "W32",
   "num": "W32",
   "zone": "z9"
  },
  {
   "side": "w",
   "sort": 1640,
   "dated": true,
   "yearLabel": "1517 to 1648",
   "ah": null,
   "title": "The Reformation, and the bordered map is born",
   "map": "1650",
   "pins": [
    [
     "Luther's protest, 1517",
     "Wittenberg, Germany",
     51.87,
     12.65
    ],
    [
     "The Peace of Westphalia, 1648",
     "Munster, Germany",
     51.96,
     7.63
    ]
   ],
   "story": "A monk objected to the church selling forgiveness, the printing press spread his objection across Europe in weeks, and western Christianity split permanently. What followed was a century of religious war, ending with the Thirty Years War, which killed perhaps a third of the population of Germany. The peace that ended it, at Westphalia in 1648, established the idea we now take for granted: that the world is divided into sovereign states with hard borders, and that what happens inside a border is that state's own business. That idea is the visual grammar of this entire website. Before it, most of the map you have been scrolling through worked on overlapping loyalties, not lines.",
   "meanwhile": "On the other rail: the Ottoman empire is at its height when Luther posts his complaints, in the very same year the caliphate moves to Istanbul.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": null,
   "id": "W33",
   "num": "W33",
   "zone": "z9"
  },
  {
   "side": "w",
   "sort": 1650,
   "dated": true,
   "yearLabel": "1500 to 1867",
   "ah": null,
   "title": "The Atlantic slave trade",
   "map": "1650",
   "pins": [
    [
     "Ships loaded here",
     "Ouidah, Benin",
     6.36,
     2.09
    ],
    [
     "Sugar plantations",
     "Barbados",
     13.19,
     -59.54
    ],
    [
     "The largest market",
     "Salvador, Brazil",
     -12.97,
     -38.5
    ]
   ],
   "story": "About twelve million African people were shipped across the Atlantic in chains, and something close to two million died at sea before arriving. It is the largest forced movement of human beings in history, and the wealth it generated built cities, banks and industries in Europe and the Americas that are still there. Slavery existed in many societies and this site does not pretend otherwise, including in the Muslim world, which held slaves and traded them. What made this system different was its scale, its permanence, the fact that it was inherited by your children, and the racial theory invented afterwards to justify it. By the honest reckoning of this timeline it is the gravest crime of the modern era.",
   "meanwhile": "On the other rail: this is happening at the same time as the height of the Ottoman, Safavid and Mughal empires, which also held slaves. This site does not excuse them either.",
   "pop": null,
   "src": "World History Encyclopedia. UNESCO General History of Africa.",
   "inv": null,
   "id": "W34",
   "num": "W34",
   "zone": "z9"
  },
  {
   "side": "w",
   "sort": 1700,
   "dated": true,
   "yearLabel": "1547 to 1725",
   "ah": null,
   "title": "Russia turns into an empire",
   "map": "1700",
   "pins": [
    [
     "Ivan takes Muslim Kazan, 1552",
     "Kazan, Russia",
     55.79,
     49.11
    ],
    [
     "Peter builds a new capital, 1703",
     "St Petersburg",
     59.94,
     30.31
    ]
   ],
   "story": "Russia began as a small principality that had been ruled by the Mongols for two centuries. Then it started expanding and did not stop, taking the Muslim khanates of Kazan and Astrakhan in the 1550s and then rolling east across Siberia to the Pacific. Peter the Great forced the country to modernise, personally cut the beards off his noblemen, built a capital on a swamp at enormous human cost, and made Russia a European power. By the nineteenth century it ruled more Muslims than the Ottoman sultan did.",
   "meanwhile": "On the other rail: the slow reversal. Russia's push south into the Caucasus and Central Asia is one half of the pressure closing on the Muslim world, and Britain in India is the other.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": null,
   "id": "W35",
   "num": "W35",
   "zone": "z9"
  },
  {
   "side": "w",
   "sort": 1776,
   "dated": true,
   "yearLabel": "1687 to 1804",
   "ah": null,
   "title": "Science, revolution, and Haiti",
   "map": "1783",
   "pins": [
    [
     "Newton publishes, 1687",
     "London",
     51.51,
     -0.13
    ],
    [
     "The American declaration, 1776",
     "Philadelphia",
     39.95,
     -75.17
    ],
    [
     "The French revolution, 1789",
     "Paris",
     48.86,
     2.35
    ],
    [
     "Haiti, the only slave revolution that won",
     "Port-au-Prince, Haiti",
     18.54,
     -72.34
    ]
   ],
   "story": "Newton explained the motion of the planets and the fall of an apple with the same equations, which is arguably the single greatest intellectual achievement of any human being. Then Europe and America started declaring that all men are created equal, and writing it into constitutions, and continuing to own people. In 1791 the enslaved people of Haiti took that sentence at face value, revolted, defeated Napoleon's army, and founded a free black republic, and the response of the free nations of the world was to isolate and impoverish them for a century. It is the sharpest illustration in this timeline of the difference between a stated ideal and an enforced one.",
   "meanwhile": "On the other rail: the same decades as Plassey and the East India Company's takeover of Bengal, and Napoleon's landing in Egypt.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Newton's laws of motion and universal gravitation. Calculus. The steam engine, which is about to change everything.",
   "id": "W36",
   "num": "W36",
   "zone": "z10"
  },
  {
   "side": "w",
   "sort": 1805,
   "dated": true,
   "yearLabel": "1799 to 1815",
   "ah": null,
   "title": "Napoleon",
   "map": "1800",
   "pins": [
    [
     "Egypt, 1798",
     "Cairo",
     30.04,
     31.24
    ],
    [
     "Waterloo, 1815",
     "Belgium",
     50.68,
     4.41
    ]
   ],
   "story": "An artillery officer from Corsica made himself emperor of France, rewrote its laws into a code still used across Europe and Latin America, and fought most of the continent at once for fifteen years. He also invaded Egypt, and although the campaign failed militarily, the scholars he brought with him produced the first systematic European study of the country and stumbled on the Rosetta Stone, which allowed hieroglyphs to be read for the first time in fifteen hundred years. His wars killed millions and spread the ideas of the French Revolution across Europe at bayonet point, which is a difficult thing to hold in one thought.",
   "meanwhile": "On the other rail: Napoleon in Egypt in 1798 is the moment it becomes obvious that Europe can now walk into the Muslim heartland whenever it chooses.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "The Napoleonic legal code. Modern artillery tactics. Canned food, invented to feed his armies.",
   "id": "W37",
   "num": "W37",
   "zone": "z10"
  },
  {
   "side": "w",
   "sort": 1850,
   "dated": true,
   "yearLabel": "1760 to 1871",
   "ah": null,
   "title": "Industry, abolition and Meiji Japan",
   "map": "1880",
   "pins": [
    [
     "The first industrial city",
     "Manchester, England",
     53.48,
     -2.24
    ],
    [
     "Japan modernises on its own terms, 1868",
     "Tokyo",
     35.68,
     139.69
    ]
   ],
   "story": "Coal, steam and factories gave a handful of countries a productive advantage over everybody else that was so large it looked like destiny, and they used it to take most of the planet. Britain abolished the slave trade in 1807 and slavery in 1833, and simultaneously expanded an empire built on coerced labour, which is the contradiction of the age. The United States fought a war over slavery and abolished it in 1865. And in 1868 Japan looked at what was happening to China and decided to industrialise on its own terms rather than be carved up, and it worked, which proved that the gap was not about race or destiny but about machines.",
   "meanwhile": "On the other rail: these are exactly the decades in which the colonial map floods over the Muslim world, and Ottoman and Egyptian reformers study Japan closely, hoping to repeat the trick.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volumes 4 and 5.",
   "inv": "The steam engine, the railway, the telegraph, photography, anaesthesia, vaccination, the germ theory of disease, electric light, the telephone.",
   "id": "W38",
   "num": "W38",
   "zone": "z10"
  },
  {
   "side": "w",
   "sort": 1916,
   "dated": true,
   "yearLabel": "1914 to 1918",
   "ah": null,
   "title": "The First World War",
   "map": "1914",
   "pins": [
    [
     "The trenches of the Western Front",
     "The Somme, France",
     50.0,
     2.65
    ],
    [
     "Four empires fall",
     "Vienna, Austria",
     48.21,
     16.37
    ]
   ],
   "story": "Industrial killing on a scale nobody had imagined. Around seventeen million people died, many of them for a few hundred yards of mud. Four empires, the German, Austro-Hungarian, Russian and Ottoman, went into the war and did not come out of it. The peace that followed was so badly designed that it produced a second and worse war twenty years later. It is the hinge of the twentieth century, and everything after it is a consequence.",
   "meanwhile": "On the other rail: this is the war that ends the caliphate's political life. The lines that Sykes and Picot drew across the Middle East in 1916 are still on the map today.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volume 5.",
   "inv": "The tank, the fighter aircraft, chemical weapons, and blood transfusion and reconstructive surgery, which were born trying to repair what the rest of it did.",
   "id": "W39",
   "num": "W39",
   "zone": "z11"
  },
  {
   "side": "w",
   "sort": 1917,
   "dated": true,
   "yearLabel": "1917",
   "ah": null,
   "title": "The Russian Revolution",
   "map": "1914",
   "pins": [
    [
     "The Tsar falls",
     "St Petersburg, Russia",
     59.94,
     30.31
    ]
   ],
   "story": "The empire that ruled more Muslims than any sultan collapsed in a fortnight, and what replaced it was a state committed to abolishing religion altogether. Central Asia's mosques and schools were closed, its scholars were killed or silenced, and its alphabets were changed twice in twenty years to cut people off from their own books. The Soviet Union also industrialised at terrifying human cost, defeated Nazi Germany at a price no other country paid, and ended up as one of the two powers holding the world at the close of this timeline.",
   "meanwhile": "On the other rail: the Ottoman caliphate is abolished in 1924, seven years after the Romanovs fell. Two ancient dynasties end within a decade of each other.",
   "pop": null,
   "src": "World History Encyclopedia. Sarwat Saulat, volume 5.",
   "inv": null,
   "id": "W40",
   "num": "W40",
   "zone": "z11"
  },
  {
   "side": "w",
   "sort": 1942,
   "dated": true,
   "yearLabel": "1939 to 1945",
   "ah": null,
   "title": "The Second World War",
   "map": "1938",
   "pins": [
    [
     "The Holocaust",
     "Auschwitz, Poland",
     50.03,
     19.2
    ],
    [
     "Stalingrad",
     "Volgograd, Russia",
     48.71,
     44.51
    ],
    [
     "Hiroshima, August 1945",
     "Hiroshima, Japan",
     34.39,
     132.46
    ]
   ],
   "story": "Between seventy and eighty-five million people died, which is more than any other event in human history. Most of them were civilians. In the middle of it, Nazi Germany built an industrial system for murdering Jewish people and killed six million of them, along with Roma, disabled people, prisoners of war and others, and this timeline states that without qualification because it is the moral floor of the whole story. The war ended with two atomic bombs and, at the same moment, with the founding of the United Nations and the writing of a Universal Declaration of Human Rights. Humanity acquired the ability to destroy itself and the first serious attempt to govern itself in the same year.",
   "meanwhile": "On the other rail: the closing frame. Europe's empires are bankrupt, and within two years India and Pakistan are independent and the age of empires is finished.",
   "pop": null,
   "src": "World History Encyclopedia.",
   "inv": "Penicillin in mass production. Radar. The jet engine. The first programmable computers. Nuclear weapons.",
   "id": "W41",
   "num": "W41",
   "zone": "z11"
  }
 ],
 "sources": {
  "historical": [
   [
    "The Quran",
    "The primary source for everything on the gold rail. Verse references throughout point to chapter and verse, so any passage can be checked. The translation consulted for meaning is M. A. S. Abdel Haleem's, published by Oxford University Press, chosen for its plain and lucid English. Where a verse is quoted inside quotation marks, the wording is Pickthall's 1930 translation, which is out of copyright.",
    "https://quran.com"
   ],
   [
    "The Hadith collections",
    "The recorded sayings and actions of the Prophet Muhammad, chiefly Sahih al-Bukhari and Sahih Muslim, used for the events of his life and the first generation.",
    "https://sunnah.com"
   ],
   [
    "Ibn Kathir, The Beginning and the End (al-Bidayah wan-Nihayah)",
    "A fourteenth-century history running from creation to the author's own day. Used here as the backbone for the prophets, the life of Muhammad, and the early caliphates.",
    "https://archive.org/details/albidayaannihayaallinonepdf"
   ],
   [
    "Ibn Kathir, Stories of the Prophets",
    "The prophets' narratives drawn out of the larger history and arranged in order, with the Quranic verses and hadith that support each one.",
    "https://archive.org/details/stories-of-the-prophets-by-ibn-kathir-english-pdf"
   ],
   [
    "Al-Tabari, History of the Prophets and Kings",
    "The great year-by-year chronicle of the ninth century, translated into English in forty volumes by the State University of New York. Used for the caliphates, where it gives events almost month by month.",
    "https://archive.org/details/tarikh-al-tabari"
   ]
  ],
  "modern": [
   [
    "Safi-ur-Rahman al-Mubarakpuri, The Sealed Nectar",
    "A modern biography of the Prophet that won first prize from the World Muslim League. It opens with a survey of Arabia before Islam, its tribes, its rulers, its religions and its economy, which is exactly what this timeline needed.",
    "https://archive.org/details/the-sealed-nectar-ar-raheeq-al-makhtum-english"
   ],
   [
    "Sarwat Saulat, Millat-e-Islamia ki Mukhtasar Tareekh",
    "A five-volume history of the Muslim community in Urdu, written to be read by ordinary people rather than specialists. It carries the narrative from the caliphates through to the modern period.",
    "https://archive.org/details/millat-e-islamiyah-ki-mukhtasar-tareekh-part-1"
   ],
   [
    "Colin McEvedy and Richard Jones, Atlas of World Population History",
    "The standard reference for how many people were alive, region by region, from antiquity onward. Every population figure on this site comes from here or from HYDE, and all of them are estimates.",
    "https://archive.org/details/atlasofworldpopu0000mcev"
   ],
   [
    "The HYDE database, via Our World in Data",
    "Modern academic estimates of historical population, used to cross-check the figures above and to show the range where scholars disagree.",
    "https://ourworldindata.org/grapher/world-population-comparison-historical-sources"
   ],
   [
    "UNESCO, General History of Africa",
    "Eight volumes written largely by African scholars. Used for Aksum, Great Zimbabwe, Benin, Mali and the Swahili coast, so that Africa is not told only through European eyes.",
    "https://www.unesco.org/en/general-history-africa"
   ],
   [
    "World History Encyclopedia",
    "A peer-reviewed reference used for the general narrative on the silver rail. Where it is the only source for a claim, that claim is a general one.",
    "https://www.worldhistory.org"
   ],
   [
    "Historical Basemaps, by Andre Ourednik and contributors",
    "The open dataset of world borders by year that draws every map on this site. It is scholarly and openly licensed, and its own authors are careful to say that ancient borders are approximations.",
    "https://github.com/aourednik/historical-basemaps"
   ]
  ],
  "note": "Where the Islamic sources and modern scholarship disagree about an event, the Islamic sources lead, and the disagreement is stated rather than hidden. Where the subject is one Islamic sources do not cover, standard scholarship leads. No dates are invented for the undated eras. Population figures are estimates and are shown as such. Borders before the modern era were zones rather than lines, and the maps here should be read that way."
 }
};
