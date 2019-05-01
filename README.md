# oxford-dictionaries-api
node module wraper for [Oxford dictionaries api](https://developer.oxforddictionaries.com)

Note: To use api v1 then use version 0.0.6. V1 will be deprecated after July 31, 2019. 

## Install
```bash
npm install --save oxford-dictionaries-api
```

## Usage
### initial
Initialize an instance of the OxfordDictionaries class to use
```javascript
// need app_id and app_key
const app_id = 'your_appid'
const app_key = 'your_appkey';

let oxford= require('oxford-dictionaries-api');
let oxforddictionaries = new oxford(app_id, app_key);
```

### functions

#### entries({ word_id, source_lang, fields, grammaticalFeatures, lexicalCategory, domains, registers, strictMatch })

function takes in an object with the following:


| Key | Type | Optional | About | Default | Example |
| --- | --- | -- | --- | --- | --- |
| word_id | String | No | The identifier for an Entry (case-sensitive). | Null | "ace" |
| source_lang | String | Yes | Language code of the source language in a monolingual dataset. | "en-gb" | "en-gb" |
| fields | Array[String] | Yes | A comma-separated list of data fields to return for the matched entries | Null | ["definitions", "domains"] |
| grammaticalFeatures | Array[String] | Yes | A comma-separated list of grammatical features ids to match on (default: all features). | Null | ["Cardinal", "Ordinal"] |
| lexicalCategory | Array[String] | Yes | A comma-separated list of lexical categories ids to match on (default: all categories). | Null | |
| domains | Array[String] | Yes | A comma-separated list of domains ids to match on (default: all domains). | Null | |
| registers | Array[String] | Yes | A comma-separated list of registers ids to match on (default: all registers). | Null | |
| strictMatch | Boolean | Yes | Specifies whether diacritics must match exactly. | False | True |

Example:
```javascript
oxforddictionaries.entries({word_id: 'ace'})
  .then((data) => console.log(data))
  .catch((e) => console.log('Error', e));
```

#### lemmas({ word_id, source_lang, grammaticalFeatures, lexicalCategory })
#### search({ source_lang, target_lang, q, prefix, limit, offset })
#### translation({ source_lang, target_lang, word_id, strictMatch })
#### thesaurus({ lang, word_id, fields, strictMatch })
#### sentences({ source_lang, word_id, strictMatch })
#### lexistats_ngrams({ source_lang, corpus, ngram_size, tokens, contains, format, minFrequency, maxFrequency, collate, sort, offset, limit })
#### lexistats_word({ source_lang, corpus, wordform, trueCase, lemma, lexicalCategory })
#### lexistats_words({ source_lang, corpus, wordform, trueCase, lemma, lexicalCategory, grammaticalFeatures, minFrequency, maxFrequency, minNormalizedFrequency, maxNormalizedFrequency, collate, sort, offset, limit })
#### domains({ source_lang, target_lang } = {})
#### fields({ endpoint } = {})
#### filters({ endpoint } = {})
#### grammaticalFeatures({ source_lang, target_lang } = {})
#### languages({ sourceLanguage, targetLanguage } = {})
#### lexicalcategories({ source_lang, target_lang } = {})
#### registers({ source_lang, target_lang } = {})

TODO:

Readme Table
- lemmas
- search
- translation
- thesaurus
- sentences
- lexistats
- utility

Readme Example
- entries

Testing
- entries
- lemmas
- search
- translation
- thesaurus
- sentences
- lexistats
- utility
