TIPS

## Services and Shared Module
The best way to set services is in core folder using providedIn: 'root' syntax without adding them within providers[] in Modules.
Why? Because a large amount of lazy features could import this shared Module, having its own instance of service, something that we surely are not looking for.
That is why in the Shared Module we should never add services. It should only contain declarables (components, pipes, directives, etc) and modules (which only contains declarables too).

## Lazy Loading
This first architecture makes use of two lazy features.
If one of them gets too big, take into account add new nested lazy features if needed.
