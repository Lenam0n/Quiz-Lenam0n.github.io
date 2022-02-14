var questions =  
        [{ 
            type : 'mc' , 
            questionType: 'Bücher' ,
            question : 'Wie heißt der Bösewicht in der Buchreihe "Harry Potter"?' , 
            choices : [ 'Lord Voldemort' , 'Darth Vader' , 'Winnie Puh' , 'Gandalf' ] , 
            correct : 'Lord Voldemort' , 
            difficulty : 'leicht'  ,
            Kennung : '1' } ,
		{ 
            type : 'tf' , 
            questionType: 'Filme' ,
            question : 'Stirbt Dumbledore?' , 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja'  , 
            difficulty : 'leicht'  ,
            Kennung : '2' } ,
		{ 
            type : 'mc' , 
            questionType: 'Filme' ,
            question : 'Wo leben Hobbits?' , 
            choices : [ 'Nimmerland' , 'Auenland' , 'AsSerienban' , 'Mordor' ] , 
            correct : 'Auenland' , 
            difficulty : 'medium'  ,
            Kennung : '3' } ,
		{ 
            type : 'mc' , 
            questionType: 'Filme' ,
            question : 'Wer findet den einen Ring?' , 
            choices : [ 'Smeargol' , 'Harry Potter' , 'Winnie Puh' , 'Luke Skywalker' ] , 
            correct : 'Smeargol' , 
            difficulty : 'leicht'  ,
            Kennung : '4' } ,
		{ 
            type : 'mc' , 
            questionType: 'Serien' ,
            question : 'Wer liebt Honig?' , 
            choices : [ 'Smeargol' , 'Harry Potter' , 'Winnie Puh' , 'Luke Skywalker' ] , 
            correct : 'Winnie Puh' , 
            difficulty : 'leicht'  ,
            Kennung : '5' } , 
		{ 
            type : 'mc' , 
            questionType: 'Nawi' ,
            question : 'Was ist ein Atombestandteil?' , 
            choices : [ 'Boson' , 'Neutron' , 'Neutrinum' , 'Tachion' ] , 
            correct : 'Neutron' , 
            difficulty : 'medium'  ,
            Kennung : '6' } , 
		{ 
            type : 'gq' , 
            questionType: 'Mathe' ,
            question : 'Was ist 1.5 x 10²?' , 
            correct : '150' , 
            difficulty : 'medium'  ,
            Kennung : '7' } , 
		{ 
            type : 'mc' , 
            questionType: 'Politik' ,
            question : 'Wer wählt den Bundespräsidenten?' , 
            choices : [ 'Der Bundeskanzler' , 'Der Bundesrat' , 'Der Bundestag' , 'Die Bundesversammlung' ] , 
            correct : 'Die Bundesversammlung' , 
            difficulty : 'medium'  ,
            Kennung : '8' } , 
		{ 
            type : 'gq' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Wieviele Sekunden hat ein Tag?' , 
            correct : '86400' , 
            difficulty : 'hard'  ,
            Kennung : '9' } ,
            {
            type : 'mc' , 
            questionType: 'Politik' ,
            question : 'Wie alt muss der Bundespräsident mindestens sein?' , 
            choices  : [ '18 Jahre alt' , '30 Jahre alt' , '40 Jahre alt' , '50 Jahre alt' ] , 
            correct : '40 Jahre alt' , 
            difficulty : 'medium'  ,
            Kennung : '10' } , 
            {
            type : 'gq' , 
            questionType: 'Mathe' ,
            question : 'Vervollständigen Sie die Zahlenreihe: 1 – 5 – 3 – 12 – 10 – 30 – 28 – ?' , 
            correct : '56'  , 
            difficulty : 'medium'  ,
            Kennung : '11' } , 
            {
            type : 'mc' , 
            questionType: 'Logik' ,
            question : 'Welches Wort passt nicht zu den anderen?' , 
            choices : [ 'scharf' , 'sauer' , 'süß' , 'salzig' ] , 
            correct : 'scharf'  , 
            difficulty : 'medium'  ,
            Kennung : '12' } ,
            {
            type : 'mc' , 
            questionType: 'Politik' ,
            question : 'Welche Wirtschaftsordnung hat die Bundesrepublik Deutschland?' , 
            choices : [ 'Kapitalismus' , 'Soziale Marktwirtschaft' , 'Freie Marktwirtschaft' , ' Planwirtschaft' ] , 
            correct : 'Soziale Marktwirtschaft' , 
            difficulty : 'medium'  ,
            Kennung : '13' } ,
            {
            type : 'mc' , 
            questionType: 'Politik' ,
            question : 'Zu welchem Begriff passt die Definition: „Es misst die Produktion von Waren und Dienstleistungen im Inland nach Abzug aller Vorleistungen“?' , 
            choices : [ 'Bruttoinlandsprodukt' , 'Bruttonationalprodukt' , 'Bruttosozialprodukt' , 'Bruttowertschöpfungsprodukt' ] , 
            correct : 'Bruttoinlandsprodukt' , 
            difficulty : 'medium'  ,
            Kennung : '14' } ,
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'In welchem Jahrhundert wurde Johann Wolfgang von Goethe geboren?' , 
            choices : [ '16. Jahrhundert' , '17. Jahrhundert' , '18. Jahrhundert' , '19. Jahrhundert' ] , 
            correct : '18. Jahrhundert' , 
            difficulty : 'leicht'  ,
            Kennung : '15' } ,
            {
            type : 'mc' , 
            questionType: 'Logik' ,
            question : 'Welche Stadt passt nicht zu den anderen?' , 
            choices : [ 'München' , 'Düsseldorf' , 'Frankfurt' , 'Schwerin' ] , 
            correct : 'Frankfurt' , 
            difficulty : 'medium'  ,
            Kennung : '16' } ,
            {
            type : 'mc' , 
            questionType: 'Logik' ,
            question : 'Wie viele Meter sind 25.000 Millimeter?' , 
            choices : [ '2,5 Meter' , '25 Meter' , '250 Meter' , '2.500 Meter' ] , 
            correct : '25 Meter' , 
            difficulty : 'leicht'  ,
            Kennung : '17' } ,
            {
            type : 'mc' , 
            questionType: 'Mathe' ,
            question : 'Wie viele Sekunden ergeben insgesamt 13,5 Minuten?' , 
            choices : [ '630 Sekunden' , '720 Sekunden' , '810 Sekunden' , '890 Sekunden' ] , 
            correct : '810 Sekunden' , 
            difficulty : 'medium'  ,
            Kennung : '18' } ,
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Was bedeutet „Inflation“?' , 
            choices : [ 'Verringerung der Kaufkraft des Geldes' , 'Stabilisierung des Preisniveaus' , 'Senkungen der Preise' , 'Stärkung der Konjunktur' ] , 
            correct : 'Verringerung der Kaufkraft des Geldes' , 
            difficulty : 'medium'  ,
            Kennung : '19' } ,
            {
            type : 'mc' , 
            questionType: 'Nawi' ,
            question : 'Wie viele Planeten hat unser Sonnensystem?' , 
            choices : [ '6' , '7' , '8' , '9' ] , 
            correct : '8' , 
            difficulty : 'leicht'  ,
            Kennung : '20' } ,
            {
            type : 'mc' , 
            questionType: 'Nawi' ,
            question : 'Wie viel Blut sind durchschnittlich im menschlichen Körper?' , 
            choices : [ 'bis zu 3 Liter' , '5 bis 6 Liter' , '8 bis 10 Liter' , '12 bis 14 Liter' ] , 
            correct : '5 bis 6 Liter' , 
            difficulty : 'leicht'  ,
            Kennung : '20' } ,
                                                                  /*  */
            {
            type : 'gq' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Was ist das Gegenteil von „generös“?' , 
            correct : 'geizig' , 
            difficulty : ''  ,
            Kennung : '21' } ,
            {
            type : 'mc' , 
            questionType: 'Nawi' ,
            question : 'Welche Rechtschreibung ist korrekt?' , 
            choices : [ 'Akupunktur' , 'Akkupunktur' , 'Ackupunktur' , 'Akupuncktur' ] , 
            correct : 'Akupunktur'  , 
            difficulty : 'medium'  ,
            Kennung : '21' } ,
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Beim Kauf eines Fernsehers zahlen Sie für die Mehrwertsteuer (19 Prozent) insgesamt 95 Euro. Wie teuer war der Fernseher netto – also ohne die Steuer?' , 
            choices : [ '400 Euro' , '450 Euro' , '500 Euro' , '550 Euro' ] , 
            correct : '500 Euro' , 
            difficulty : 'medium'  ,
            Kennung : '22' } ,
            {
            type : 'mc' , 
            questionType: 'Nawi' ,
            question : 'Wie viele Bit sind ein Byte?' , 
            choices : [ '4' , '8' , '16' , '32' ] , 
            correct : '8' , 
            difficulty : 'leicht'  ,
            Kennung : '23' } ,
            {
            type : 'mc' , 
            questionType: 'Erdkunde' ,
            question : 'Wie heißt der größte See Deutschlands?' , 
            choices : [ 'Bodensee' , 'Chiemsee' , 'Ammersee' , 'Starnberger See' ] , 
            correct : 'Bodensee' , 
            difficulty : 'medium'  ,
            Kennung : '24' } ,
            {
            type : 'tf' , 
            questionType: 'Nawi' ,
            question : 'Ist Astronomie eine Naturwissenschaften.' , 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '25' } , 
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Welche der aufgeführten Waffen ist eine halbautomatische Schusswaffe im Sinne des Waffengesetzes?', 
            choices : [ 'Single-Action-Revolver', 'Selbstladepistole', 'Doppelflinte', 'Double-Action Revolver'],
            correct : 'Selbstladepistole' , 
            difficulty : 'medium'  ,
            Kennung : '26' } , 
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Fürs Deutsch-Abi sollen die Schüler ein Werk von Lessing (1729 bis 1781) erörtern. Welcher literarischen Gattung ist „Emilia Galotti“ von 1772 zuzuordnen?', 
            choices : [ 'Fabel', 'Drama','Epos', 'Novelle'],
            correct : 'Drama' , 
            difficulty : 'hard'  ,
            Kennung : '27' } , 
            {
            type : 'mc' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Der nächste Text beschäftigt sich mit einem gewissen „Josef K.“, der in die Fänge der Justiz geraten ist. Um welchen Roman geht es also?', 
            choices : [ '„Der Richter und sein Henker“ (Friedrich Dürrenmatt)', '„Justiz“ (Friedrich Dürrenmatt)','„Der Prozess“ (Franz Kafka)', '„Selbs Justiz“ (Bernhard Schlink)'],
            correct : '„Der Prozess“ (Franz Kafka)' , 
            difficulty : 'hard'  ,
            Kennung : '28' } , 
            {
            type : 'mc' , 
            questionType: 'Englisch' ,
            question : 'Bei der mündlichen Englisch-Prüfung sollen Schüler gesellschaftliche Entwicklungen anhand von Bildern beschreiben. Welche Vokabel passt hier: „Global warming contributes to ... “?', 
            choices : [ 'glacial melt.', 'glaciers.','Epmelted glaciers.', 'greenhouse gas emissions.'],
            correct : 'glacial melt.' , 
            difficulty : 'hard'  ,
            Kennung : '29' } , 
            {
            type : 'mc' , 
            questionType: 'Englisch' ,
            question : 'Welches Englisches Wort würde man benutzen um ein Licht => Stom Generator zu beschreiben', 
            choices : [ 'Power plant', 'Photo power plant','Hydroelectric power plant', 'Real estate'],
            correct : 'Power plant' , 
            difficulty : 'medium'  ,
            Kennung : '30' } , 
            {
            type : 'mc' , 
            questionType: 'Physik' ,
            question : 'Womit kann Fluglärm für Bewohner in Flughafennähe verringert werden?', 
            choices : [ 'Elektromagnetische Wellen', 'Elektromagnetische Strömung','Antischall', 'Antikal'],
            correct : 'Antischall' , 
            difficulty : 'medium'  ,
            Kennung : '31' } , 
            {
            type : 'mc' , 
            questionType: 'Mathe' ,
            question : 'Berechne die maximale Ladung, die in dem Kondensator eines Defibrillators gespeichert werden kann, bei einer Kapazität von 0.00005 Farad und einer Maximalspannung von 4000 Volt', 
            choices : [ '0,2 C', '0,2 F','0,2 V', '42'],
            correct : '0,2 C' , 
            difficulty : 'hard'  ,
            Kennung : '32' } , 
            {
            type : 'mc' , 
            questionType: 'Chemie' ,
            question : 'Welche Chemikalie reagiert beim Erhitzen mit Wasser?', 
            choices : [ 'Schwefeldioxid', 'Kohlensäure','Kaliumpermanganat', 'Calciumchlorid'],
            correct : 'Calciumchlorid' , 
            difficulty : 'hard'  ,
            Kennung : '33' } , 
            {
            type : 'mc' , 
            questionType: 'Chemie' ,
            question : 'Welcher Stoff reagiert in Dieselfahrzeugen mit den Stickoxiden und verringert so den Ausstoß derselben?', 
            choices : [ 'Wasserstoff', 'Ammoniak','Harnstoff', 'Aluminiumsilikat'],
            correct : 'Ammoniak' , 
            difficulty : 'hard'  ,
            Kennung : '34' } , 
            {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass Krokodile Steine als Ballast schlucken, um tief untergetaucht schwimmen zu können? ', 
            choices : [ 'Wahr', 'Falsch'],
            correct : 'Wahr' , 
            difficulty : 'medium'  ,
            Kennung : '35' } , 
            {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass Russland die längste Küste von allen Staaten der Erde hat?', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Nein' , 
            difficulty : 'medium'  ,
            Kennung : '36' } , 
            {
            type : 'tf' , 
            questionType: 'Geschichte' ,
            question : 'Ist es wirklich wahr, dass im Hochmittelalter in Europa im Durchschnitt auf zwei Menschen eine Kirche kam? ', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '37' } , 
      {
            type : 'tf' , 
            questionType: 'Geschichte' ,
            question : 'Ist es wirklich wahr, dass der Nil schon einmal zugefroren war?', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '38' } ,
      {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass in den USA statistisch gesehen jeden Tag ein US-Bürger vom Blitz erschlagen wird?', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '39' } ,
      {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass eine Raupe mehr Muskeln hat, wie ein Mensch? ', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '40' } ,
      {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass männliche Affen im Gegensatz zu Männern keine Glatze bekommen können?', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Nein' , 
            difficulty : 'medium'  ,
            Kennung : '41' } ,
      {
            type : 'tf' , 
            questionType: 'AllgemeinWissen' ,
            question : 'Ist es wirklich wahr, dass Krokodile ihre Zunge nicht herausstrecken können? ', 
            choices : [ 'Ja', 'Nein'],
            correct : 'Ja' , 
            difficulty : 'medium'  ,
            Kennung : '42' } ,

            
            /*             {
            type : 'mc' , 
            questionType: '' ,
            question : '', 
            choices : [ '', '','', ''],
            correct : '' , 
            difficulty : 'medium'  ,
            Kennung : '' } ,  */


];