---
layout: page
title: Podcast Subscriptions
---
<h2>Active</h2>
<div class="stack stack-large podcast-subscriptions">
{% for podcast in subscriptions.active -%}
    <article>
        <img src="/img/podcast-albums/{{podcast.image}}" class="album">
        <div class="meta">
            {% if podcast.listen.brian -%}{% icon "male-user" %}{%- endif %}
            {%- if podcast.listen.melissa %}{% icon "female-user" %}{%- endif %}
            {%- if podcast.patreon %}{% icon "dollar-sign" %}{%- endif -%}
        </div>
        <div class="body">
            <h3>{{podcast.title}}</h3>
            <div class="description">{{podcast.description}}</div>
            <div class="comments">{{podcast.comments}}</div>
        </div>
    </article>
{%- endfor %}
</div>

<h2>Retired</h2>
<div class="stack stack-large podcast-subscriptions">
{% for podcast in subscriptions.retired -%}
    <article>
        <img src="/img/podcast-albums/{{podcast.image}}" class="album">
        <div class="meta">
            {% if podcast.listen.brian -%}{% icon "male-user" %}{%- endif %}
            {%- if podcast.listen.melissa %}{% icon "female-user" %}{%- endif %}
            {%- if podcast.patreon %}{% icon "dollar-sign" %}{%- endif -%}
        </div>
        <div class="body">
            <h3>{{podcast.title}}</h3>
            <div class="description">{{podcast.description}}</div>
            <div class="comments">{{podcast.comments}}</div>
        </div>
    </article>
{%- endfor %}
</div>