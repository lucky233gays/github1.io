window.__require = function t(e, o, c) {
    function n(i, a) {
        if (!o[i]) {
            if (!e[i]) {
                var s = i.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var u = "function" == typeof __require && __require;
                    if (!a && u) return u(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                i = s
            }
            var d = o[i] = {
                exports: {}
            };
            e[i][0].call(d.exports, function(t) {
                return n(e[i][1][t] || t)
            }, d, d.exports, t, e, o, c)
        }
        return o[i].exports
    }
    for (var r = "function" == typeof __require && __require, i = 0; i < c.length; i++) n(c[i]);
    return n
}({
    AdjustWithHeight: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0f273/Jv9ZA6KLvLgLheAdB", "AdjustWithHeight");
        var c, n = this && this.__extends || (c = function(t, e) {
                return (c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                c(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, c) {
                var n, r = arguments.length,
                    i = r < 3 ? e : null === c ? c = Object.getOwnPropertyDescriptor(e, o) : c;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, c);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (i = (r < 3 ? n(i) : r > 3 ? n(e, o, i) : n(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            a = i.ccclass,
            s = i.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.offset = 0, e.hasShowEffect = !1, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    var t;
                    t = cc.winSize.height / 2, this.node.y = t, this.hasShowEffect || (this.node.y += this.offset)
                }, e.prototype.start = function() {
                    this.showTheNode()
                }, e.prototype.showTheNode = function() {
                    this.hasShowEffect && this.node.runAction(cc.moveTo(.5, cc.v2(this.node.x, this.node.y + this.offset)).easing(cc.easeBackOut()))
                }, r([s], e.prototype, "offset", void 0), r([s], e.prototype, "hasShowEffect", void 0), r([a], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {}],
    FillScreen: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cf78aszWjpFyq1ddsF2Ne8X", "FillScreen");
        var c, n = this && this.__extends || (c = function(t, e) {
                return (c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                c(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, c) {
                var n, r = arguments.length,
                    i = r < 3 ? e : null === c ? c = Object.getOwnPropertyDescriptor(e, o) : c;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, c);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (i = (r < 3 ? n(i) : r > 3 ? n(e, o, i) : n(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            a = i.ccclass,
            s = (i.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.node.setContentSize(cc.winSize.width, cc.winSize.height)
                }, e.prototype.start = function() {}, r([a], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    Fruit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0de7d1tCFZEWoOp0kegDtm5", "Fruit");
        var c, n = this && this.__extends || (c = function(t, e) {
                return (c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                c(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, c) {
                var n, r = arguments.length,
                    i = r < 3 ? e : null === c ? c = Object.getOwnPropertyDescriptor(e, o) : c;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, c);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (i = (r < 3 ? n(i) : r > 3 ? n(e, o, i) : n(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./MainGame"),
            a = cc._decorator,
            s = a.ccclass,
            u = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.fruitNumber = 0, e.downWallColl = 0, e.edgeX = 0, e.checkEndTime = 0, e.combineCount = 0, e.endCount = 0, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.edgeX = 360 - this.node.width / 2
                }, e.prototype.update = function(t) {
                    var e = this;
                    e.node.x < -e.edgeX ? e.node.x = -e.edgeX : e.node.x > e.edgeX && (e.node.x = e.edgeX), "fruitNode" == e.node.parent.name && (e.checkEndTime += t, e.node.y + e.node.height / 2 > i.default.Instance.dashLineNode.y && 0 == e.endCount && e.checkEndTime > 3 && (e.node.color = cc.Color.RED, cc.tween(this.node).to(.3, {
                        opacity: 0
                    }).to(.3, {
                        opacity: 255
                    }).union().repeat(3).call(function() {
                        i.default.Instance.gameOver()
                    }).start(), e.endCount++))
                }, e.prototype.onBeginContact = function(t, e, o) {
                    var c = i.default.Instance.fruitNode;
                    if ("downwall" == o.node.group && (e.node.parent = c, 0 == this.downWallColl && i.default.Instance.playAudio(0, !1, 1), this.downWallColl++), i.default.Instance.findHighestFruit(), "fruit" == o.node.group) {
                        if (e.node.parent = c, null != e.node.getComponent(cc.RigidBody) && (e.node.getComponent(cc.RigidBody).angularVelocity = 0), e.node.y < o.node.y) return;
                        var n = o.node.getComponent("Fruit").fruitNumber,
                            r = this.fruitNumber;
                        if (n == r) {
                            if (10 == r) return;
                            var a = o.node.position,
                                s = i.default.Instance.scoreObj.target + r + 1;
                            i.default.Instance.setScoreTween(s), o.node.getComponent(cc.PhysicsCircleCollider).radius = 0, o.node.getComponent(cc.PhysicsCircleCollider).apply(), e.node.getComponent(cc.PhysicsCircleCollider).radius = 0, e.node.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(e.node).to(.1, {
                                position: a
                            }).call(function() {
                                i.default.Instance.createFruitBoomEffect(r, a, e.node.width), i.default.Instance.createLevelUpFruit(r + 1, a), 9 == r && i.default.Instance.createBigWaterMelonEffect(), e.node.active = !1, o.node.active = !1, o.node.destroy(), e.node.destroy()
                            }).start()
                        }
                    }
                }, r([s], e)
            }(cc.Component));
        o.default = u, cc._RF.pop()
    }, {
        "./MainGame": "MainGame"
    }],
    MainGame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c1e82h/0GRLfaLg792olC5e", "MainGame");
        var c, n = this && this.__extends || (c = function(t, e) {
                return (c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                c(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, c) {
                var n, r = arguments.length,
                    i = r < 3 ? e : null === c ? c = Object.getOwnPropertyDescriptor(e, o) : c;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, c);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (i = (r < 3 ? n(i) : r > 3 ? n(e, o, i) : n(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            a = i.ccclass,
            s = i.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.fruitSprites = [], e.scoreLabel = null, e.fruitPre = null, e.topNode = null, e.dashLineNode = null, e.isDashLineInit = !1, e.fruitNode = null, e.targetFruit = null, e.createFruitCount = 0, e.scoreObj = {
                        isScoreChanged: !1,
                        target: 0,
                        change: 0,
                        score: 0
                    }, e.fruitL = [], e.guozhiL = [], e.guozhiZ = [], e.juicePre = null, e.effectNode = null, e.audios = [], e.maskBg = null, e.caidaiSprites = [], e.caidaiPre = null, e.daxiguaEffectNode = null, e.gameOverPre = null, e.gameOverSign = 0, e.theFruitHeight = -1200, e.createLevelUpFruit = function(t, e) {
                        var o = cc.instantiate(this.fruitPre);
                        o.parent = this.fruitNode, o.getComponent(cc.Sprite).spriteFrame = this.fruitSprites[t], o.getComponent("Fruit").fruitNumber = t, o.position = e, o.scale = 0, o.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -100), o.getComponent(cc.PhysicsCircleCollider).radius = o.height / 2, o.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(o).to(.5, {
                            scale: 1
                        }, {
                            easing: "backOut"
                        }).call(function() {}).start(), this.fruitHeigth = this.findHighestFruit()
                    }, e
                }
                var o;
                return n(e, t), o = e, e.prototype.onLoad = function() {
                    null != o.Instance && o.Instance.destroy(), o.Instance = this, this.physicsSystemCtrl(!0, !1)
                }, e.prototype.start = function() {
                    this.initDashLine(), this.createOneFruit(0), this.bindTouch()
                }, e.prototype.update = function(t) {
                    this.updateScoreLabel(t), this.checkTheRedDashLine(t)
                }, e.prototype.physicsSystemCtrl = function(t, e) {
                    cc.director.getPhysicsManager().enabled = t, cc.director.getPhysicsManager().gravity = cc.v2(0, -300), e && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit), cc.director.getCollisionManager().enabled = t, cc.director.getCollisionManager().enabledDebugDraw = e
                }, e.prototype.createOneFruit = function(t) {
                    var e = this,
                        o = cc.instantiate(this.fruitPre);
                    o.parent = this.topNode, o.position = cc.v3(0, 0, 0), o.getComponent(cc.Sprite).spriteFrame = this.fruitSprites[t], o.getComponent("Fruit").fruitNumber = t, o.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static, o.getComponent(cc.PhysicsCircleCollider).radius = 0, o.getComponent(cc.PhysicsCircleCollider).apply(), o.scale = 0, cc.tween(o).to(.5, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).call(function() {
                        e.targetFruit = o
                    }).start()
                }, e.prototype.randomInteger = function(t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                }, e.prototype.createFruitBoomEffect = function(t, e, o) {
                    var c = this;
                    c.playAudio(4, !1, .3), c.playAudio(1, !1, .5);
                    for (var n, r, i, a, s = function() {
                            var s = cc.instantiate(c.juicePre);
                            s.parent = c.effectNode, s.getComponent(cc.Sprite).spriteFrame = c.fruitL[t], n = 359 * Math.random(), r = 30 * Math.random() + o / 2, i = cc.v2(Math.sin(n * Math.PI / 180) * r, Math.cos(n * Math.PI / 180) * r), s.scale = .5 * Math.random() + o / 100, a = .5 * Math.random(), s.position = e, s.runAction(cc.sequence(cc.spawn(cc.moveBy(a, i), cc.scaleTo(a + .5, .3), cc.rotateBy(a + .5, c.randomInteger(-360, 360))), cc.fadeOut(.1), cc.callFunc(function() {
                                s.active = !1
                            }, u)))
                        }, u = this, d = 0; d < 10; d++) s();
                    for (var p = function() {
                            var s = cc.instantiate(c.juicePre);
                            s.parent = c.effectNode, s.getComponent(cc.Sprite).spriteFrame = c.guozhiL[t], s.active = !0, n = 359 * Math.random(), r = 30 * Math.random() + o / 2, i = cc.v2(Math.sin(n * Math.PI / 180) * r, Math.cos(n * Math.PI / 180) * r), s.scale = .5 * Math.random() + o / 100, a = .5 * Math.random(), s.position = e, s.runAction(cc.sequence(cc.spawn(cc.moveBy(a, i), cc.scaleTo(a + .5, .3)), cc.fadeOut(.1), cc.callFunc(function() {
                                s.active = !1
                            }, h)))
                        }, h = this, f = 0; f < 20; f++) p();
                    var l = cc.instantiate(c.juicePre);
                    l.parent = c.effectNode, l.active = !0, l.getComponent(cc.Sprite).spriteFrame = c.guozhiZ[t], l.position = e, l.scale = 0, l.angle = this.randomInteger(0, 360), l.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, o / 150), cc.fadeOut(1)), cc.callFunc(function() {
                        l.active = !1
                    })))
                }, e.prototype.getRandomNum = function(t, e, o) {
                    return void 0 === o && (o = !1), o ? Math.floor(Math.random() * (e - t + 1) + t) : Math.random() * (e - t) + t
                }, e.prototype.createRibbonEffect = function(t, e) {
                    this.playAudio(1, !1, 1);
                    for (var o = this.getRandomNum(80, 100, 0), c = 0; c < o; c++) {
                        var n = cc.instantiate(this.caidaiPre);
                        n.parent = e, n.getComponent(cc.Sprite).spriteFrame = this.caidaiSprites[this.getRandomNum(0, 5, !0)], n.position = t, n.setScale(this.getRandomNum(.7, 1, 0));
                        var r = 360 * Math.random() * Math.PI / 180,
                            i = 360 * Math.random(),
                            a = cc.v2(n.x + Math.sin(r) * i, n.y + Math.cos(r) * i + 150);
                        cc.v2(a.x, a.y + 100), n.runAction(cc.sequence(cc.spawn(cc.moveTo(.255, a).easing(cc.easeCubicActionOut()), cc.scaleTo(.255, 1 * Math.random() + .5), cc.moveBy(4.25, cc.v2(0, .8 * -cc.winSize.height - Math.random() * cc.winSize.height)), cc.rotateBy(4.25, (1800 * Math.random() + 1200) * (Math.random() > .5 ? 1 : -1)), cc.sequence(cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0)), cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0)), cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0))), cc.sequence(cc.delayTime(.17 * this.getRandomNum(20, 24.5, 0)), cc.fadeOut(.17))), cc.removeSelf(!0), cc.callFunc(function() {
                            n.active = !1
                        })))
                    }
                }, e.prototype.createBigWaterMelonEffect = function() {
                    var t = this,
                        e = cc.instantiate(t.maskBg);
                    e.parent = t.daxiguaEffectNode, e.active = !0, e.opacity = 0, cc.tween(e).to(.5, {
                        opacity: 150
                    }).start();
                    var o = new cc.Node;
                    o.addComponent(cc.Sprite).spriteFrame = t.fruitSprites[10], o.parent = t.daxiguaEffectNode, o.position = cc.v3(0, 0, 0), o.scale = 0;
                    var c = new cc.Node;
                    c.addComponent(cc.Sprite).spriteFrame = t.caidaiSprites[8], c.scale = 3, c.parent = o, c.position = cc.v3(0), cc.tween(c).by(5, {
                        angle: 360
                    }).repeatForever().start();
                    var n = new cc.Node;
                    n.addComponent(cc.Sprite).spriteFrame = t.fruitSprites[10], n.parent = o, n.position = cc.v3(0), t.playAudio(2, !1, 1), t.createRibbonEffect(cc.v3(0, 300, 0), this.daxiguaEffectNode), o.runAction(cc.sequence(cc.spawn(cc.jumpBy(1, 0, 0, 300, 1), cc.scaleTo(1, 1)), cc.delayTime(1), cc.spawn(cc.moveTo(1, cc.v2(0, 800)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                        e.destroy(), o.destroy()
                    })))
                }, e.prototype.bindTouch = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, e.prototype.onTouchStart = function(t) {
                    if (null != this.targetFruit) {
                        var e = this.node.convertToNodeSpaceAR(t.getLocation()).x,
                            o = this.targetFruit.position.y;
                        cc.tween(this.targetFruit).to(.1, {
                            position: cc.v3(e, o)
                        }).start()
                    }
                }, e.prototype.onTouchMove = function(t) {
                    null != this.targetFruit && (this.targetFruit.x = this.node.convertToNodeSpaceAR(t.getLocation()).x)
                }, e.prototype.onTouchEnd = function() {
                    var t = this;
                    if (null != t.targetFruit) {
                        var e = t.targetFruit.height;
                        t.targetFruit.getComponent(cc.PhysicsCircleCollider).radius = e / 2, t.targetFruit.getComponent(cc.PhysicsCircleCollider).apply(), t.targetFruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, t.targetFruit.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -800), t.targetFruit = null, this.scheduleOnce(function() {
                            0 == t.createFruitCount ? (t.createOneFruit(0), t.createFruitCount++) : 1 == t.createFruitCount ? (t.createOneFruit(0), t.createFruitCount++) : 2 == t.createFruitCount ? (t.createOneFruit(1), t.createFruitCount++) : 3 == t.createFruitCount ? (t.createOneFruit(2), t.createFruitCount++) : 4 == t.createFruitCount ? (t.createOneFruit(2), t.createFruitCount++) : 5 == t.createFruitCount ? (t.createOneFruit(3), t.createFruitCount++) : t.createFruitCount > 5 && (t.createOneFruit(Math.floor(5 * Math.random())), t.createFruitCount++)
                        }, .5)
                    }
                }, e.prototype.setScoreTween = function(t) {
                    var e = this.scoreObj;
                    e.target != t && (e.target = t, e.change = Math.abs(e.target - e.score), e.isScoreChanged = !0)
                }, e.prototype.updateScoreLabel = function(t) {
                    var e = this.scoreObj;
                    if (e.isScoreChanged) {
                        e.score += t * e.change * 5, e.score >= e.target && (e.score = e.target, e.isScoreChanged = !1);
                        var o = Math.floor(e.score);
                        this.scoreLabel.string = o.toString()
                    }
                }, e.prototype.playAudio = function(t, e, o) {
                    cc.audioEngine.play(this.audios[t], e, o)
                }, e.prototype.findHighestFruit = function() {
                    for (var t = this.fruitNode.children[0].y + this.fruitNode.children[0].width / 2, e = 1; e < this.fruitNode.children.length; e++) {
                        var o = this.fruitNode.children[e].y + this.fruitNode.children[e].width / 2;
                        t < o && (t = o)
                    }
                    this.theFruitHeight = t
                }, e.prototype.checkTheRedDashLine = function() {
                    this.isDashLineInit && (this.dashLineNode.y - this.theFruitHeight < 100 && this.dashLineNode.y - this.theFruitHeight >= 0 && (this.dashLineNode.active = !0), this.dashLineNode.y - this.theFruitHeight > 100 && (this.dashLineNode.active = !1))
                }, e.prototype.initDashLine = function() {
                    var t = this;
                    cc.tween(this.dashLineNode).to(.3, {
                        opacity: 255
                    }).to(.3, {
                        opacity: 0
                    }).union().repeatForever().start(), this.scheduleOnce(function() {
                        t.dashLineNode.active = !1, t.isDashLineInit = !0
                    }, 1)
                }, e.prototype.gameOver = function() {
                    var t = this;
                    if (0 == t.gameOverSign) {
                        for (var e = 0, o = function(o) {
                                setTimeout(function() {
                                    t.createFruitBoomEffect(t.fruitNode.children[o].getComponent("Fruit").fruitNumber, t.fruitNode.children[o].position, t.fruitNode.children[o].width);
                                    var e = t.scoreObj.target + t.fruitNode.children[o].getComponent("Fruit").fruitNumber + 1;
                                    t.setScoreTween(e), t.fruitNode.children[o].active = !1
                                }, 100 * ++e)
                            }, c = this.fruitNode.children.length - 1; c >= 0; c--) o(c);
                        t.dashLineNode.active = !0;
                        for (var n = 1; n < t.topNode.children.length; n++) t.topNode.children[n].active = !1;
                        this.scheduleOnce(function() {
                            t.showGameOverPanel()
                        }, 3), t.gameOverSign++
                    }
                }, e.prototype.showGameOverPanel = function() {
                    var t = this,
                        e = cc.instantiate(this.gameOverPre);
                    e.parent = t.node, e.getChildByName("startBtn").on(cc.Node.EventType.TOUCH_START, function() {
                        t.restartGame()
                    });
                    var o = e.getChildByName("startBtn");
                    cc.tween(o).to(1, {
                        scale: .8
                    }).to(1, {
                        scale: .9
                    }).union().repeatForever().start(), e.children[0].on(cc.Node.EventType.TOUCH_START, function() {
                        t.restartGame()
                    })
                }, e.prototype.restartGame = function() {
                    cc.director.preloadScene("MainGameSence", function() {
                        cc.director.loadScene("MainGameSence")
                    })
                }, e.Instance = null, r([s([cc.SpriteFrame])], e.prototype, "fruitSprites", void 0), r([s(cc.Label)], e.prototype, "scoreLabel", void 0), r([s(cc.Prefab)], e.prototype, "fruitPre", void 0), r([s(cc.Node)], e.prototype, "topNode", void 0), r([s(cc.Node)], e.prototype, "dashLineNode", void 0), r([s(cc.Node)], e.prototype, "fruitNode", void 0), r([s([cc.SpriteFrame])], e.prototype, "fruitL", void 0), r([s([cc.SpriteFrame])], e.prototype, "guozhiL", void 0), r([s([cc.SpriteFrame])], e.prototype, "guozhiZ", void 0), r([s(cc.Prefab)], e.prototype, "juicePre", void 0), r([s(cc.Node)], e.prototype, "effectNode", void 0), r([s([cc.AudioClip])], e.prototype, "audios", void 0), r([s(cc.Prefab)], e.prototype, "maskBg", void 0), r([s([cc.SpriteFrame])], e.prototype, "caidaiSprites", void 0), r([s(cc.Prefab)], e.prototype, "caidaiPre", void 0), r([s(cc.Node)], e.prototype, "daxiguaEffectNode", void 0), r([s(cc.Prefab)], e.prototype, "gameOverPre", void 0), o = r([a], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {}]
}, {}, ["AdjustWithHeight", "FillScreen", "Fruit", "MainGame"]);