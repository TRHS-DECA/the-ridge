# The Ridge Online

The official eCommerce platform for ThunderRidge's own school-based enterprise, The Ridge.

## Technical Specifications

### Tools/Frameworks/Languages Used:

* HTML ([Jade](http://jade-lang.com) Templating Engine)
* CSS ([LESS](http://lesscss.org) CSS Preprocessor)
* [AngularJS](http://angularjs.org) - MVC, Routing w/ngRoute
* [HarpJS](http://harpjs.com) - Asset Pipeline for Jade/LESS
* Ribbon 'API' - taking route parameters and embedding according checkout and product
* Hosted on Github Pages

## Contribute:

To contribute, first fork this repository. Then, create a branch with the naming convention ```feature_name--username--pull``` and implement and commit the desired contribution. Then, file a pull request describing the specific implementations, and after being reviewed for quality, the code will be merged into the main branch of the repository.

## Documentation

Due to constraints in terms of server availability, this is currently hosted on Github Pages, a static server that does not currently allow for server-side languages. Due to this, addition of products and information is currently not a simple form submission, and involves multiple steps that are documented as follows.

**To add a product**:

1. Go to http://o.ribbon.co
2. Login with the credentials (Restricted to the officer team)
3. Add a product with an image and description. Add the following receipt message:

```
Thank you for your purchase! To receive your product, visit the school store with a printout of this receipt or have a screenshot of it on your phone, and a manager will give you the product. Thanks!
```
and assign it a URL that is unique using the following naming convention: ```color-design-item_type```
4. Open the [items.json](_harp/items.json) file and add the product information at the top of the JS Object with structure similar to the products already filled out.
5. Go to the Command Line/Terminal, open up the repository folder locally, and execute the compilation script by doing:

```bash
$ ./_harp/update.sh "Talk about addition/modification here"
```

6. If all is done correctly, you should be good!

## License

All the codein this repository is licensed under the open-source MIT License that can be found [here](LICENSE).

## Questions, Comments, Concerns

If anyone has any questions about anything regarding this eCommerce platform or any other technological concern for The Ridge and/or TR DECA, please do not hesitate to contact Krish Dholakiya, the Chief Technology Officer of ThunderRidge DECA and The Ridge.

He can be reached primarily via:

email: dholakiyaks@s.dcsdk12.org
issue report: [file issue here](https://github.com/TRHS-DECA/the-ridge/issues)
@ school: 5th Period Marketing, 4th Period Intro to Business, *or* B Lunch

---

Krish Dholakiya

Chief Technology Officer - The Ridge

dholakiyaks@s.dcsdk12.org

http://krrishd.github.io