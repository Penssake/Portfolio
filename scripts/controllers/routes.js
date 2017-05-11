'use strict';

page('/', aboutController.show);
page('/about', aboutController.show);
page('/portfolio', portfolioController.show);
page('/blog', blogController.show);
page('/contact', contactController.show);

page();
