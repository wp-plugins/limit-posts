=== Plugin Name ===
Contributors: PluginCentral
Donate link: www.limitposts.com/donate/
Tags: limits, limit posts, limit pages, limit cpt, limit custom post types, restrict posts, post creating limit, post creation limit, posts per user, user post limit, publish limit
Requires at least: 4.0.0
Tested up to: 4.2.2
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A plugin to allow administrators to limit the number of posts a user can publish in a given time period.

== Description ==

This plugin allows you to limit the number of posts (any post type, including custom post types) that a user can publish within a specified time period.

You can set up as many limits as you like, for different post types, different user roles, whatever you like. When a user tries to create a new post, the limits are checked, if the user has exceeded any of the limits, they wont be able to publish.

= Main Features =

*	Limit the creation of any post type.
*	Limit the number of posts by user role.
*	Specify 0 to block a post type completely.
*	Time period can be in seconds, minutes, hours, days, weeks, months or years
*	Make a limit last forever by specifying 9999 years

In the next version I'll be adding the ability to specify post status, so you can limit the number of revisions or auto drafts (or whatever you like). I'll also be adding the ability to specify individual users as well as user roles.
In a future release I'll also be adding the ability to incorporate this functionality in custom forms.

== Installation ==

= Automatic Installation =

1. In your WordPress dashboard go to Plugins > Add New > search for limit posts.
2. Click Install Now on the Limit Posts plugin. Make sure you install the correct plugin, Limit Posts by PluginCentral

= Manual Installation =

1.	Click the Download Version button above, save the file to a handy location.
2.	Extract the zip file to path_to_your_site/wp-content/plugins/, this should create a limit-posts folder.

= Enable the plugin =

In your WordPress dashboard go to Plugins > Installed Plugins > click Activate just under Limit Posts.

= Using this plugin =

In your WordPress dashboard go to Settings > Limit Posts. Here you'll be able to set up limits.

NB When you add a new limit, edit a limit or delete a limit, you must click Save Changes. If you don't click Save Changes, your changes will be lost.

== Frequently Asked Questions ==

= I've found a bug, what do I do? =

Click on the View support forum button on the right.

= What happens when a limit is reached? =

A message will be displayed, informing the user that the limit has been reached. The publish section will not be displayed, so the user will not be able to attempt to publish a post.



== Screenshots ==

1.	Settings > Limit Posts admin panel, showing rules.
2. 	Adding or editing a new rule.
3.	publication blocked message.

== Changelog ==

= 1.0 = 
Initial release

== Upgrade Notice ==

= 1.0 = 
Initial release