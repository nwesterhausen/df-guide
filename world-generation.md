# World Generation

Some short ideas for interesting world generation, or how to tweak advanced parameters to desired effects.

## World Size Considerations

A bigger world has a lot more embark locations, more civilization interactions, and a lot more to do. The major downside
is the size of the save and time spent saving/loading can get ridiculous with a million+ historical figures and events.
Although you have fewer choices in a small world I think my philosophy for world gen is to do smaller or pocket (or medium
if you really want something "big"), and then saving/loading takes a lot less time, and the save files are not as large
(and you can actually parse the legends exports).

> Make the world smaller or pocket size

## Minerals

With a smaller world, the higher amount of mineral generation can create more desirable sites to use. I like to set the
minerals med-high amount.

> Increase minerals 1 level from default

## Volcanoes

Having just one or two volcanoes is perfectly fine sometimes. Othertimes you want a lot. To change this you have to use
advanced world creation and modify the volcanism mesh (according to the wiki's [notes on volcanism]
(https://dwarffortresswiki.org/index.php/DF2014:Advanced_world_generation#Volcanism)). The gist of it is, increase the
weight used for the 80-100 range of the volcanism mesh. This will increase the igneous areas and increase amounts of
volcanoes. It may be good to also increase the 0-20 range of the mesh as well, to prevent an entirely igneous world
from forming. The [stackoverflow post about volcanism](https://gaming.stackexchange.com/questions/119308/coal-and-a-volcano-on-the-same-map)
linked in the wiki also sheds some light on the use of meshes and variance values for volcanism.

> Set volcanism X and Y variance to some number higher than 400 if you want sedimentary/igneous areas next to one another

> Set the volcanism mesh to something like 1 0 0 0 1 or 10 1 1 1 10 to have a lot of volcanoes.

Adjust the variance and mesh sizes depending on how unnatural you want to make the world.. magma is super useful but in 
the past I've never really made it a priority.

## Embarking

- I always liked to embark in jungles because that's a fun thing to picture in your head. Jungles are wild and mysterious.
- I always liked to embark in plains with a stream/brook/river and play with water works (this was especially true when moats were a better defense than they are in the most recent versions of Dwarf Fotress)
- I sometimes tried embarking in mountains but that was always really challenging. I think present-day me would be able to succeed there.

I have enjoyed watching/reading about embarks in evil areas but never really wanted the personal ~~stress~~ fun of it. (Note: My most recent game in mid December 2021 is in an evil embark.)