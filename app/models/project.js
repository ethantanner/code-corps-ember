import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  base64IconData: attr(),
  closedPostsCount: attr('number'),
  description: attr(),
  iconLargeUrl: attr(),
  iconThumbUrl: attr(),
  longDescriptionBody: attr(),
  longDescriptionMarkdown: attr(),
  openPostsCount: attr('number'),
  slug: attr(),
  title: attr(),

  categories: hasMany('categories', { async: true }),
  organization: belongsTo('organization', { async: true }),
  posts: hasMany('posts', { async: true }),
  skills: hasMany('skills', { async: true }),

  hasOpenPosts: Ember.computed.gt('openPostsCount', 0),
  hasPendingMembers: Ember.computed.alias('organization.hasPendingMembers'),
  pendingMembersCount: Ember.computed.alias('organization.pendingMembersCount'),
});
