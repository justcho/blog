# Just Devise

## Button  按钮

### 按钮类型 尺寸 风格

我使用了`theme``size``level`参数来分别区分区别三种类型
关于样式 我使用的 动态css  根据不同的值来确定对应相应的css

```typescript
// 如果theme 是undefined  就取默认值 justed-theme-button  如果不是就取新值 justd-the-new
const classes = computed(() => {
  return {
    [`justd-theme-${theme}`]: theme,
    [`justd-size-${size}`]: size,
    [`justd-level-${level}`]: level,
  };
});
```

### disabled  和 loading

- `disabled` :这个是使用 button 自带的 `disabled`
- `loading` : 这个是 使用 `v-if` 来控制他的显示状态

## Icon  图标

icon 图标 我是直接用的 iconfont

- 通过传`name`来确定是哪个`href`
- 颜色的话通过 传`fill`来控制的

```typescript
  <svg class="justd-icon">
    <use :xlink:href="`#j-${name}`" :fill="color"></use>
  </svg>
```

## Grid  栅格

### Row 组件

`align` 还是使用动态css

```typescript
const rowClass = computed(() => {
  return {
    [`align-${align}`]: align,
  };
});
```

 `gutter` 间隙 `-gutter / 2 + "px"` 是为了控制 最左侧 和最右侧的 col padding 的所空出来的 块儿

```typescript
const rowStyle = computed(() => {
  return {
    marginLeft: -gutter / 2 + "px",
    marginRight: -gutter / 2 + "px",
  };
});
```

### Col  组件

`gutter` 来控制每块的宽度
guuter 从 Row 那边传过来需要设置 col 的间隙

```typescript
const colStyle = computed(() => {
  return {
    paddingLeft: gutter / 2 + "px",
    paddingRight: gutter / 2 + "px",
  };
});
```

`span``offet` 动态class没值的时候`return []` 有值的时候 return  对应的数组出去

```typescript
const createClasses = (obj) => {
  if (!obj) {
    return [];
  }
  let array = [];
  if (obj.span) {
    array.push(`col-${obj.span}`);
  }
  if (obj.offset) {
    array.push(`offset-${obj.offset}`);
  }
  return array;
};
const { span, offset } = props;

const colClass = computed(() => {
  return createClasses({ span, offset });
});

// style 样式 宽度通过循环来实现 
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
```
