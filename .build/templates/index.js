(function(dust){dust.register("index",body_0);var blocks={"headScripts":body_1,"body":body_2,"bodyScripts":body_3};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<script src=\"/components/pixi.js/bin/pixi.js\"></script>");}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk;}body_2.__dustBody=!0;function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<script>setupGamePage();</script>");}body_3.__dustBody=!0;return body_0}(dust));